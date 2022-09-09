import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token = "";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /**Get list of all companies */

  static async getAllCompanies(){
    let res = await this.request(`companies`);
    return res.companies;
  }

  /**Get list of companies with search parameter */

  static async getSearchedCompanies(query){
    let res = await this.request(`companies?name=${query}`);
    return res.companies;
  }

  /**Get list of all jobs */

  static async getAllJobs(){
    let res = await this.request(`jobs`);
    return res.jobs;
  }

  /**Get list of jobs with search parameter */

  static async getSearchedJobs(query){
    let res = await this.request(`jobs?title=${query}`);
    return res.jobs;
  }

  /** Create a new user */

  static async createNewUser(username, password, firstName, lastName, email){
    let res = await this.request("auth/register",
      {username, password, firstName, lastName, email},
      "post");
    return res.token;
  }

  /** Login a user */

  static async login(username, password){
    let res = await this.request("auth/token", {username, password}, "post");
    return res.token;
  }

  /** Get individual user information */
  static async getUserInfo(username){
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /**Update individual user information */

  static async updateUserInfo(username, firstName, lastName, email){
    let res = await this.request(`users/${username}`,
      {firstName, lastName, email},
      "patch");
    return res.user;
  }
  
  /**Current user applies to specific job */
  
  static async applyToJob(username, jobId){
    let res = await this.request(`users/${username}/jobs/${jobId}`,
      "post");
    return res;
  }

}

export default JoblyApi;