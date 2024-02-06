import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function CandidateUpdate() {
  const location = useLocation();
  const data = location.state || {};

  // Initialize state with data from location.state
  const [fullName, setFullName] = useState(data.fullName || "");
  const [gender, setGender] = useState(data.gender || "");
  const [dob, setDob] = useState(data.dob || "");
  const [age, setAge] = useState(data.age || "");
  const [education, setEducation] = useState(data.education || "");
  const [fathersName, setFathersName] = useState(data.fathersName || "");
  const [mothersName, setMothersName] = useState(data.mothersName || "");
  const [mobileNumber, setMobileNumber] = useState(data.mobileNumber || "");
  const [aadharNumber, setAadharNumber] = useState(data.aadharNumber || "");
  const [village, setVillage] = useState(data.village || "");
  const [panchayat, setPanchayat] = useState(data.panchayat || "");
  const [postOffice, setPostOffice] = useState(data.postOffice || "");
  const [block, setBlock] = useState(data.block || "");
  const [landmark, setLandmark] = useState(data.landmark || "");
  const [district, setDistrict] = useState(data.district || "");
  const [state, setState] = useState(data.state || "");
  const [camp, setCamp] = useState(data.camp || "");
  const [jobRolePreference, setJobRolePreference] = useState(data.jobRolePreference || "");
  const [photograph, setPhotograph] = useState(data.photograph || "");
  const [aadharPhoto, setAadharPhoto] = useState(data.aadharPhoto || "");

  // Age calculation function
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


  // Custom DOB change handler
  const handleDOBChange = (event) => {
    const newDOB = event.target.value;
    setDob(newDOB);
    const newAge = calculateAge(newDOB);
    setAge(newAge);
  };

  const handleFileUpload = async (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (!file) return;

    const storagePath = `candidate_images/${file.name}`;
    const imageRef = ref(storage, storagePath);

    try {
      const snapshot = await uploadBytes(imageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      if (name === "photograph") {
        setPhotograph(url);
      } else if (name === "aadharPhoto") {
        setAadharPhoto(url);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle upload error
    }
  };

  // Function to handle the data update
  const updateData = () => {
    const userId = location.state._id;
    const updatedData = {
      _id: userId,
      fullName,
      gender,
      dob,
      age,
      education,
      fathersName,
      mothersName,
      mobileNumber,
      aadharNumber,
      village,
      panchayat,
      postOffice,
      block,
      landmark,
      district,
      state,
      camp,
      jobRolePreference,
      photograph,
      aadharPhoto,
    };

    fetch(`http://localhost:5000/updateCandidate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ userId: userId, updatedData: updatedData }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        window.location.href = "/Home";
      })
      .catch((error) => {
        console.error("Error updating candidate:", error);
      });

      
  };
  
  
  

  return (
    <div className="form-container">
      <form className="candidate-form">
        {/* Photograph upload field */}
        <div className="form-section">
          <label htmlFor="photograph-upload" className="custom-file-upload" >Photograph</label>
          <input
            id="photograph-upload"
            type="file"
            name="photograph"
            accept="image/*"
            className="hidden-file-input"
            onChange={handleFileUpload}
          />
          {photograph && <img src={photograph} alt="Photograph" className="photo"/>}
        </div>

        {/* Aadhar photo upload field */}
        <div className="form-section">
          <label htmlFor="aadhar-upload" className="custom-file-upload" >Aadhar Photo</label>
          <input
            id="aadhar-upload"
            type="file"
            name="aadharPhoto"
            accept="image/*"
            className="hidden-file-input"
            onChange={handleFileUpload}
          />
          {aadharPhoto && <img src={aadharPhoto} alt="Aadhar Photo" className="photo"/>}
        </div>

        <div className="form-section">
          <label>Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => 
              setFullName(e.target.value)
              
            }
          />
        </div>
        <div className="form-section">
          <label>Gender</label>
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label>Date of Birth</label>
          <input
            type="date" // Change this to 'date' type for better user experience
            value={dob}
            onChange={handleDOBChange}
          />
        </div>
        <div className="form-section">
          <label>Age</label>
          <input
            type="text"
            value={age}
            readOnly // Make this readOnly if you don't want users to edit it manually
          />
        </div>
        <div className="form-section">
          <label>Education</label>
          <input
            type="text"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label>Father's Name</label>
          <input
            type="text"
            value={fathersName}
            onChange={(e) => setFathersName(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label>Mother's Name</label>
          <input
            type="text"
            value={mothersName}
            onChange={(e) => setMothersName(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label>Mobile Number</label>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label>Aadhar Number</label>
          <input
            type="text"
            value={aadharNumber}
            onChange={(e) => setAadharNumber(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label>Village</label>
          <input
            type="text"
            value={village}
            onChange={(e) => setVillage(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label>Panchayat</label>
          <input
            type="text"
            value={panchayat}
            onChange={(e) => setPanchayat(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label>Post Office</label>
          <input
            type="text"
            value={postOffice}
            onChange={(e) => setPostOffice(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label>Block</label>
          <input
            type="text"
            value={block}
            onChange={(e) => setBlock(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label>Landmark</label>
          <input
            type="text"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label>District</label>
          <input
            type="text"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label>State</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label>Camp</label>
          <input
            type="text"
            value={camp}
            onChange={(e) => setCamp(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label>Job Role Preference</label>
          <input
            type="text"
            value={jobRolePreference}
            onChange={(e) => setJobRolePreference(e.target.value)}
          />
        </div>
        {/* <div className="form-section">
          <label>Aadhar Photo</label>
          <img
            src={`data:image/jpeg;base64,${btoa(String.fromCharCode.apply(null, new Uint8Array(aadharPhoto)))}`}

            className="photo"
          />
        </div> */}
        <button
  type="button"
  className="btn btn-primary"
  onClick={updateData}
  style={{
    backgroundColor: "#1cbbb4", // Set the background color to #1cbbb4
    color: "#fff", // Set the text color to white
    border: "none",
    padding: "10px 20px",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
  }}
>
  Update
</button>
      </form>
    </div>
  );
}

export default CandidateUpdate;