import React, { useState } from "react";

/** Form for adding.
 *
 * Props:
 * - onSubmit: function to call in parent.
 * 
 * State:
 * - formData
 *
 * { CompanyList, JobList } -> SearchForm
 */

function SearchForm({ onSubmit }) {
  const initial = { search: "" };

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
    onSubmit(formData.search);
    setFormData(initial);
  }

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>

      <div className="mb-3">
        <input
          id="search"
          name="search"
          className="form-control"
          placeholder="Enter Search"
          onChange={handleChange}
          value={formData.search}
          aria-label="Search"
        />
      </div>
      <div>
        <button className="btn btn-primary">
          Submit
        </button>
      </div>

    </form>
  );
}

export default SearchForm;
