// StudentForm.js

import React, { useState } from 'react';
import axios from 'axios';
// import './CSSFiles/studentForm.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const StudentForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    sno: '',
    name: '',
    fatherName: '',
    adhaarNo: '',
    mobileNo: '',
    district: '',
    registrationDate: '',
    mobiliserName: '',
    paymentStatus: '',
    remarks: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/submit-student-form', formData);
      console.log(response.data);
      // You may want to navigate to a different route or handle success in another way
    } catch (error) {
      console.error('Error submitting student form:', error);
    }
  };

  return (
    <div className="container">
      <h2 style={{ color: 'black' }}>Student Form</h2>
      <form method="POST" onSubmit={handleSubmit}>
        <label htmlFor="sno">S.no:</label>
        <input
          type="text"
          id="sno"
          name="sno"
          value={formData.sno}
          onChange={handleChange}
          required
        />

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="fatherName">Father Name:</label>
        <input
          type="text"
          id="fatherName"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          required
        />

        <label htmlFor="adhaarNo">Adhaar No.:</label>
        <input
          type="text"
          id="adhaarNo"
          name="adhaarNo"
          value={formData.adhaarNo}
          onChange={handleChange}
          required
        />

        <label htmlFor="mobileNo">Mobile No.:</label>
        <input
          type="text"
          id="mobileNo"
          name="mobileNo"
          value={formData.mobileNo}
          onChange={handleChange}
          required
        />

        <label htmlFor="district">District:</label>
        <input
          type="text"
          id="district"
          name="district"
          value={formData.district}
          onChange={handleChange}
          required
        />

        <label htmlFor="registrationDate">Registration Date:</label>
        <input
          type="text"
          id="registrationDate"
          name="registrationDate"
          value={formData.registrationDate}
          onChange={handleChange}
          required
        />

        <label htmlFor="mobiliserName">Name of Mobilser/Swalambi:</label>
        <input
          type="text"
          id="mobiliserName"
          name="mobiliserName"
          value={formData.mobiliserName}
          onChange={handleChange}
          required
        />

        <label htmlFor="paymentStatus">Status:</label>
        <input
          type="text"
          id="paymentStatus"
          name="paymentStatus"
          value={formData.paymentStatus}
          onChange={handleChange}
          required
        />

        <label htmlFor="remarks">Remarks:</label>
        <input
          type="text"
          id="remarks"
          name="remarks"
          value={formData.remarks}
          onChange={handleChange}
          required
        />

        {/* Repeat for other fields */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
