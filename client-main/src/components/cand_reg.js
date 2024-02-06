// RegistrationForm.js
import React, { useState } from 'react';
import './cand_reg.css';
import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';


const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    registrationDate: '',
    fullName: '',
    gender: '',
    dob: '',
    age: '',
    education: '',
    fathersName: '',
    mothersName: '',
    mobileNumber: '',
    aadharNumber: '',
    village: '',
    panchayat: '',
    postOffice: '',
    block: '',
    landmark: '',
    district: '',
    state: 'Bihar',
    camp: '',
    jobRolePreference: '',
    photograph: null,
    aadharPhoto: null,
    photographUrl: '',
    aadharPhotoUrl: '',
  });

  const [errors, setErrors] = useState({});

  const genders = ['Male', 'Female', 'Transgender', 'Prefer not to say'];
  const educationOptions = ['5th pass', '8th pass', '10th pass', '12th pass', 'Graduate', 'Post Graduate'];
  const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"];

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  const handleDOBChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, age: calculateAge(value) });
    setErrors({ ...errors, [name]: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleFileChange = async (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (!file) return;

    const storagePath = name === 'aadharPhoto' 
      ? `student_aadhar_image/${file.name}`
      : `student_photograph/${file.name}`;

    const imageRef = ref(storage, storagePath);
    try {
      const snapshot = await uploadBytes(imageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      setFormData({ ...formData, [`${name}Url`]: url });
    } catch (error) {
      console.error('Error uploading file:', error);
      setErrors({ ...errors, [name]: 'Failed to upload file' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!['photograph', 'aadharPhoto', 'photographUrl', 'aadharPhotoUrl'].includes(key) && !formData[key]) {
        newErrors[key] = 'This field is required';
      }
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const dataToSend = {
      ...formData,
      photograph: formData.photographUrl,
      aadharPhoto: formData.aadharPhotoUrl,
      registrationDate: formData.registrationDate ? formData.registrationDate.split('T')[0] : '',
      dob: formData.dob ? formData.dob.split('T')[0] : '',
    };

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        console.log('Registration successful!');
        // Handle success...
        navigate('/Mobiliser_Home');
      } else {
        console.error('Registration failed. Status:', response.status);
        // Handle failure...
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network or other errors...
    }
  };


  return (
    // <Header/>
    <div className="registration-form-container">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit} action="/register" method="post">
        <div className="form-group">
          <label>Date of Registration:</label>
          <input
            type="date"
            name="registrationDate"
            value={formData.registrationDate}
            onChange={handleChange}
            required
          />
          {errors.registrationDate && <span className="error">{errors.registrationDate}</span>}
        </div>

        {/* Add the rest of the form fields based on your requirements */}
        {/* Example: */}
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Gender</option>
            {genders.map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </select>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleDOBChange}
            required
          />
          {errors.dob && <span className="error">{errors.dob}</span>}
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            readOnly
            // If you don't want users to manually enter the age, use "readOnly"
          />
        </div>
        <div className="form-group">
          <label>Education:</label>
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Education</option>
            {educationOptions.map((education) => (
              <option key={education} value={education}>
                {education}
              </option>
            ))}
          </select>
          {errors.education && <span className="error">{errors.education}</span>}
        </div>
        <div className="form-group">
          <label>Father's Name:</label>
          <input
            type="text"
            name="fathersName"
            value={formData.fathersName}
            onChange={handleChange}
            required
          />
          {errors.fathersName && <span className="error">{errors.fathersName}</span>}
        </div>
        <div className="form-group">
          <label>Mother's Name:</label>
          <input
            type="text"
            name="mothersName"
            value={formData.mothersName}
            onChange={handleChange}
            required
          />
          {errors.mothersName && <span className="error">{errors.mothersName}</span>}
        </div>
        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="tel"
            name="mobileNumber"
            pattern="[0-9]{10}"
            title="Please enter a 10-digit mobile number"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
          {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
        </div>
        <div className="form-group">
          <label>Aadhar Number:</label>
          <input
            type="tel"
            name="aadharNumber"
            pattern="[0-9]{12}"
            title="Please enter 12-digit aadhar Number"
            value={formData.aadharNumber}
            onChange={handleChange}
            required
          />
          {errors.aadharNumber && <span className="error">{errors.aadharNumber}</span>}
        </div>
        <div className="form-group">
          <label>Village:</label>
          <input
            type="text"
            name="village"
            value={formData.village}
            onChange={handleChange}
            required
          />
          {errors.village && <span className="error">{errors.village}</span>}
        </div>
        <div className="form-group">
          <label>Panchayat :</label>
          <input
            type="text"
            name="panchayat"
            value={formData.panchayat}
            onChange={handleChange}
            required
          />
          {errors.panchayat && <span className="error">{errors.panchayat}</span>}
        </div>
        <div className="form-group">
          <label>Post Office:</label>
          <input
            type="text"
            name="postOffice"
            value={formData.postOffice}
            onChange={handleChange}
            required
          />
          {errors.postOffice && <span className="error">{errors.postOffice}</span>}
        </div>
        <div className="form-group">
          <label>Block:</label>
          <input
            type="text"
            name="block"
            value={formData.block}
            onChange={handleChange}
            required
          />
          {errors.block && <span className="error">{errors.block}</span>}
        </div>
        <div className="form-group">
          <label>Landmark:</label>
          <input
            type="text"
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
            required
          />
          {errors.landmark && <span className="error">{errors.landmark}</span>}
        </div>
        <div className="form-group">
          <label>District:</label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
          />
          {errors.district && <span className="error">{errors.district}</span>}
        </div>
        <div className="form-group">
          <label>State:</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          {errors.state && <span className="error">{errors.state}</span>}
        </div>
        <div className="form-group">
          <label>Camp:</label>
          <input
            type="text"
            name="camp"
            value={formData.camp}
            onChange={handleChange}
            required
          />
          {errors.camp && <span className="error">{errors.camp}</span>}
        </div>
        <div className="form-group">
          <label>Job role preference:</label>
          <input
            type="text"
            name="jobRolePreference"
            value={formData.jobRolePreference}
            onChange={handleChange}
            required
          />
          {errors.jobRolePreference && <span className="error">{errors.jobRolePreference}</span>}
        </div>
        <div className="form-group">
          <label>Aadhar Card(pdf/jpeg/png):</label>
          <input
            type="file"
            name="aadharPhoto"
            accept="image/*,application/pdf"
            onChange={handleFileChange}
            required // Aadhar card photo is mandatory
          />
          {errors.aadharPhoto && <span className="error">{errors.aadharPhoto}</span>}
        </div>
        <div className="form-group">
          <label>Photograph(pdf/jpeg/png):</label>
          <input
            type="file"
            name="photograph"
            accept="image/*,application/pdf"
            onChange={handleFileChange}
          />
          {errors.photograph && <span className="error">{errors.photograph}</span>}
        </div>

        
        {/* Add other form fields similarly */}

        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;