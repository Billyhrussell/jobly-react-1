import React, { useState } from "react";
import './SearchForm.css'
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
    <form className = "SearchForm row justify-content-center justify-content-lg-start gx-0" onSubmit={handleSubmit}>
      <div className="col-8">
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

        <button className="btn btn-primary col-auto">
          Submit
        </button>

    </form>
  );
}

export default SearchForm;
