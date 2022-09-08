import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

/** Form for adding.
 *
 * Props:
 * - register: function to call in parent.
 *
 * RoutesList -> SignUpForm
 */

function SignUpForm({ register }) {
  const initial =
    { username: "", password:"", firstName:"", lastName:"", email:"" };
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initial);
  console.log("what is signup formData", formData);

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
    register(formData);
    setFormData(initial);
    navigate("/");
  }

  return (
    <form className="SignUpForm" onSubmit={handleSubmit}>

      <div className="mb-3">
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
        <input
          id="password"
          name="password"
          className="form-control"
          placeholder="Enter password"
          onChange={handleChange}
          value={formData.password}
          aria-label="Password"
        />
      </div>
      <div className="mb-3">
        <input
          id="firstName"
          name="firstName"
          className="form-control"
          placeholder="Enter first name"
          onChange={handleChange}
          value={formData.firstName}
          aria-label="First Name"
        />
      </div>
      <div className="mb-3">
        <input
          id="lastName"
          name="lastName"
          className="form-control"
          placeholder="Enter last name"
          onChange={handleChange}
          value={formData.lastName}
          aria-label="Last Name"
        />
      </div>
      <div className="mb-3">
        <input
          id="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
          onChange={handleChange}
          value={formData.email}
          aria-label="Email"
        />
      </div>
      <div>
        <button>
          Submit
        </button>
      </div>

    </form>
  );
}

export default SignUpForm;
