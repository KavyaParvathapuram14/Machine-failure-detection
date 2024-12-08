import React, { useState } from "react";

function InputForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    temperature: "",
    vibration: "",
    powerUsage: "",
    humidity: "",
    machineType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Temperature:
        <input
          type="number"
          name="temperature"
          value={formData.temperature}
          onChange={handleChange}
        />
      </label>
      <label>
        Vibration:
        <input
          type="number"
          name="vibration"
          value={formData.vibration}
          onChange={handleChange}
        />
      </label>
      <label>
        Power Usage:
        <input
          type="number"
          name="powerUsage"
          value={formData.powerUsage}
          onChange={handleChange}
        />
      </label>
      <label>
        Humidity:
        <input
          type="number"
          name="humidity"
          value={formData.humidity}
          onChange={handleChange}
        />
      </label>
      <label>
        Machine Type:
        <input
          type="text"
          name="machineType"
          value={formData.machineType}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputForm;
