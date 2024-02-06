import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./just_view_candidate.css";

export default function JustViewCandidate() {
  const location = useLocation();
  const navigate = useNavigate();
  const [approvalStatus, setApprovalStatus] = useState(null);

  const data = location.state;

  async function ApproveData() {
    const userId = location.state._id;

    const approvalData = {
      _id: userId,
      fullName: data.fullName,
      gender: data.gender,
      dob: data.dob,
      age: data.age,
      education: data.education,
      fathersName: data.fathersName,
      mothersName: data.mothersName,
      mobileNumber: data.mobileNumber,
      aadharNumber: data.aadharNumber,
      village: data.village,
      panchayat: data.panchayat,
      postOffice: data.postOffice,
      block: data.block,
      landmark: data.landmark,
      district: data.district,
      state: data.state,
      camp: data.camp,
      jobRolePreference: data.jobRolePreference,
      photograph: data.photograph,
      aadharPhoto: data.aadharPhoto,
      registrationDate: data.registrationDate
    };

    console.log(approvalData);

    if (window.confirm(`Are you sure you want to approve?`)) {
      try {
        const response = await fetch("http://localhost:5000/approveUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ userId, approvalData }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        setApprovalStatus("Approved");
        navigate.push("/Home");
      } catch (error) {
        console.error("Error updating candidate:", error);
        setApprovalStatus("Failed to approve");
      }
    } else {
      // Handle rejection logic if needed
    }
  }

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className="form-container">
      <form className="candidate-form">
        <div className="form-section">
          <label>Photograph</label>
          {data && data.photograph ? (
            <img src={data.photograph} alt="Candidate Photograph" className="photo" />
          ) : (
            <p>No photograph available</p>
          )}
        </div>

        <div className="form-section">
          <label>Aadhar Photo</label>
          {data && data.aadharPhoto ? (
            <img src={data.aadharPhoto} alt="Aadhar Card" className="photo" />
          ) : (
            <p>No Aadhar photo available</p>
          )}
        </div>

        <div className="form-section">
          <label>Full Name</label>
          <input
            type="text"
            value={data ? data.fullName : ""}
            readOnly
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          />
        </div>

        <div className="form-section">
          <label>Gender</label>
          <input
            type="text"
            value={data ? data.gender : ""}
            readOnly
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          />
        </div>

        <div className="form-section">
          <label>Date of Birth</label>
          <input
            type="text"
            value={data ? data.dob : ""}
            readOnly
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          />
        </div>

        <div className="form-section">
          <label>Age</label>
          <input
            type="text"
            value={data ? data.age : ""}
            readOnly
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          />
        </div>

        <div className="form-section">
          <label>Education</label>
          <input
            type="text"
            value={data ? data.education : ""}
            readOnly
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          />
        </div>

        <div className="form-section">
          <label>Father's Name</label>
          <input
            type="text"
            value={data ? data.fathersName : ""}
            readOnly
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          />
        </div>

        <div className="form-section">
          <label>Mother's Name</label>
          <input
            type="text"
            value={data ? data.mothersName : ""}
            readOnly
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          />
        </div>

        <div className="form-section">
          <label>Mobile Number</label>
          <input
            type="text"
            value={data ? data.mobileNumber : ""}
            readOnly
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          />
        </div>

        <div className="form-section">
          <label>Aadhar Number</label>
          <input
            type="text"
            value={data ? data.aadharNumber : ""}
            readOnly
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          />
        </div>

        <div className="form-section">
          <label>Village</label>
          <input
            type="text"
            value={data ? data.village : ""}
            readOnly
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          />
        </div>

        <div className="form-section">
          <label>Panchayat</label>
          <input
            type="text"
            value={data ? data.panchayat : ""}
            readOnly
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          />
        </div>

        <div className="form-section">
          <label>Post Office</label>
          <input
            type="text"
            value={data ? data.postOffice : ""}
            readOnly
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          />
        </div>

        <div className="form-section">
          <label>Block</label>
          <input
            type="text"
            value={data ? data.block : ""}
            readOnly
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          />
        </div>

        <div className="form-section">
          <label>Landmark</label>
          <input
            type="text"
            value={data ? data.landmark : ""}
            readOnly
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          />
        </div>

        <div className="form-section">
          <label>District</label>
          <input
            type="text"
            value={data ? data.district : ""}
            readOnly
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          />
        </div>

        <div className="form-section">
          <label>State</label>
          <input
            type="text"
            value={data ? data.state : ""}
            readOnly
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          />
        </div>

        <div className="form-section">
          <label>Camp</label>
          <input
            type="text"
            value={data ? data.camp : ""}
            readOnly
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          />
        </div>

        <div className="form-section">
          <label>Job Role Preference</label>
          <input
            type="text"
            value={data ? data.jobRolePreference : ""}
            readOnly
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
            }}
          />
        </div>

        <div className="form-section" style={{ display: "flex", justifyContent: "flex-end" }}>
          <div>
            <button
              type="button"
              onClick={ApproveData}
              style={{
                backgroundColor: "#1cbbb4",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                fontFamily: "Arial, sans-serif",
                fontSize: "16px",
              }}
            >
              Approve
            </button>
          </div>
        </div>

        {approvalStatus && (
          <div className={approvalStatus === "Approved" ? "success" : "error"}>
            {approvalStatus}
          </div>
        )}
      </form>
    </div>
  );
}