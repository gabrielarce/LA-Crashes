import React, { useState } from 'react';
import { FaBeer } from 'react-icons/fa';

function DataFilter({ crashes, filtered, setFiltered, closeModal }) {
  // Step 2: Define the state for the form fields
  const [formData, setFormData] = useState({});

  // Step 4: Define the form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Step 6: Handle form submission, e.g., send data to an API
    const filteredArray = crashes.filter((item) => {
      for (const key in formData) {
        if (
          (formData[key] !== null || !formData[key] || formData[key] !== '') &&
          item[key] !== formData[key]
        ) {
          return false;
        }
      }
      return true;
    });
    setFiltered(filteredArray);
    console.log('Form data submitted:', formData, filtered);
    closeModal();
  };

  // Step 5: Add event handlers to update the state
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    // Handle checkbox separately, as its value is 'checked' instead of 'value'
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  return (
    <div className="">
      <h2>Filter Data</h2>
      {/* Step 3: Render form elements */}
      <form className="" onSubmit={handleSubmit}>
        <div className="w-full sm:w-1/2 my-1">
          <label>Acohol Involved:</label>
          <input
            type="checkbox"
            name="alcohol_involved"
            checked={formData?.alcohol_involved}
            onChange={handleChange}
          />
        </div>
        <div className="w-full sm:w-1/2 my-1">
          <label>Bicycle Involved:</label>
          <input
            type="checkbox"
            name="bicycle_accident"
            value={formData.bicycle_accident}
            onChange={handleChange}
          />
        </div>
        <div className="w-full sm:w-1/2 my-1">
          <label>Motorcycle Involved:</label>
          <input
            type="checkbox"
            name="motorcycle_accident"
            value={formData.bicycle_accident}
            onChange={handleChange}
          />
        </div>
        <div className="w-full sm:w-1/2 my-1">
          <label>Pedestrian Involved:</label>
          <input
            type="checkbox"
            name="pedestrian_accident"
            value={formData.pedestrian_accident}
            onChange={handleChange}
          />
        </div>
        <div className="w-full sm:w-1/2 my-1">
          <label htmlFor="day_of_week">Day of the Week:</label>
          <select
            name="day_of_week"
            id="day_of_week"
            value={formData.day_of_week}
            onChange={handleChange}
          >
            <option value="">Select a day</option>
            <option value="1">Monday</option>
            <option value="2">Tuesday</option>
            <option value="3">Wednesday</option>
            <option value="4">Thursday</option>
            <option value="5">Friday</option>
            <option value="6">Saturday</option>
            <option value="7">Sunday</option>
          </select>
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          type="submit"
        >
          Apply Filter
        </button>
      </form>
    </div>
  );
}

export default DataFilter;
