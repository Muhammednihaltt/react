import React, { useEffect, useState } from 'react'
import './session.css'

const Session= () => {

 const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const { name, email, age } = formData;

    if (!name.trim()) newErrors.name = "Name is required";
    else if (!/^[A-Za-z]+$/.test(name))
  newErrors.name = "Name must contain alphabets only";


    if (!email) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email))
      newErrors.email = "Invalid email format";

    if (!age) newErrors.age = "Age is required";
    else if (isNaN(age) || age < 1 || age > 120)
      newErrors.age = "Age must be 1–120";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Save form values to sessionStorage
    sessionStorage.setItem("formData", JSON.stringify(formData));

    alert("Form Saved to Session Storage!");

    // Clear form
    setFormData({
      name: "",
      email: "",
      age: "",
    });

    setErrors({});
  };

  return (
    <div className="formnew">
      <h1>React - Session Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};


export default Session;