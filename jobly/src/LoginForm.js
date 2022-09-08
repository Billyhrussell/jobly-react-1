import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

/** Form for logging in.
 *
 * Props:
 * - login: function to call in parent.
 *
 * State:
 * - formData
 *
 * RoutesList -> LoginForm
 */

function LoginForm({ login }) {
  const initial = { username: "", password: "" };
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initial);

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    login(formData);
    setFormData(initial);
    navigate("/");
  }

  return (
    <div className="loginPage">
      <h3 className="mb-4">Log In</h3>
      <form className="LoginForm" onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="mb-2 label">Username</label>
          <input
            id="username"
            name="username"
            className="form-control"
            placeholder="Enter username"
            onChange={handleChange}
            value={formData.username}
            aria-label="Username"
          />
        </div>
        <div className="mb-3">
        <label className="mb-2 label">Password</label>
          <input
            id="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handleChange}
            value={formData.password}
            aria-label="Password"
            type="password"
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary">
            Submit
          </button>
        </div>

      </form>
    </div>
  );
}

export default LoginForm;
