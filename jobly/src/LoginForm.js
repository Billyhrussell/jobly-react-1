import React, { useState } from "react";


function LoginForm({ login }) {
  const initial = { username: "", password:"" };

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
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>

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
      <div>
        <button>
          Submit
        </button>
      </div>

    </form>
  );
}

export default LoginForm;
