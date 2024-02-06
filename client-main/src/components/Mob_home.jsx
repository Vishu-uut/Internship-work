import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faList, faTent, faCircleQuestion,faUser } from '@fortawesome/free-solid-svg-icons';
import './Mob_home.css';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faHouse, faList, faTent, faCircleQuestion);




const Plot = createPlotlyComponent(Plotly);

const Mob_home = () => {
  const [name, setName] = useState('');
 
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);
  const [candidates, setCandidates] = useState([]);
  const [Tcandidates, setTCandidates] = useState([]);
  const navigate = useNavigate();
  const getRecentlyRegisteredStudents = (events) => {
    // Convert the registrationDate strings to Date objects
    const eventsWithDateObjects = events.map(event => ({
      ...event,
      registrationDate: new Date(event.registrationDate)
    }));
  
    // Sort the events based on the 'registrationDate' field in descending order
    const sortedEvents = eventsWithDateObjects.sort((a, b) => b.registrationDate - a.registrationDate);
  
    // Slice the array to get the top 5 recently registered students
    const recentlyRegisteredStudents = sortedEvents.slice(0, 5);
  
    return recentlyRegisteredStudents;
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/students')
      .then((response) => {
        setTCandidates(response.data);

        const lastdata=getRecentlyRegisteredStudents(response.data);
        
        setCandidates(lastdata);

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

  }, []);

  const toggleProfileDropdown = () => {
    setProfileDropdownVisible(!profileDropdownVisible);
  };

  const logout = () => {
    // Implement your logout logic here
  };

  const handleNavigateToRegister = () => {
    navigate('/register'); // Replace '/register' with the path to your RegistrationForm component
  };
  const getStudentCountByMonth = (events) => {
    // Create an array with 12 elements initialized to 0
    console.log(events)
    const studentCountByMonth = Array.from({ length: 12 }, () => 0);
  
    // Iterate through events and count students for each month
    events.forEach((event) => {
      const registrationDate = new Date(event.registrationDate);
      const monthIndex = registrationDate.getMonth();
      
      // Increment the count for the corresponding month
      studentCountByMonth[monthIndex]++;
    });
  
    return studentCountByMonth;
  };
  const graphData = [
    {
      x:[1,2,3,4,5,6,7,8,9,10,11,12],
      y: getStudentCountByMonth(Tcandidates),
      type: 'bar',
      marker: {
        color: 'rgb(28, 187, 180)',
      },
    },
  ];
  const pieData = [
    {
      labels: ['Complete', 'Incomplete'],
      values: [75, 25], // 75% complete, 25% incomplete
      type: 'pie',
      marker: {
        colors: ['lightgreen', 'lightcoral'], // Color for complete and incomplete
      },
    },
  ];

  return (
   
    <div className="app-container">
      <nav className="navvbar">
        <div className="company-logo">Company Logo</div>
        <div className="navvbar-buttons">
        <button className="new-registration-button" onClick={handleNavigateToRegister}>
            New Registration
          </button>

          
          <div className="profile-icon" onClick={toggleProfileDropdown}>
            <FontAwesomeIcon icon={faUser} /> 
          </div>
          {profileDropdownVisible && (
            <div className="profile-dropdown">
              <ul>
                <li>My Profile</li>
                <li onClick={logout}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <div className="content-wrapper">
        <div className="sidebar">
          <ul>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faHouse} />
                <span>ﾠﾠHome</span>
              </a>
            </li>
            <li onClick={() => navigate("/students")}>
              
                <FontAwesomeIcon icon={faList} />
                <span>ﾠﾠCandidate Records</span>
              
            </li>
            <li onClick={() => navigate("/camp")}>
              <FontAwesomeIcon icon={faTent} />
              <span> Camp</span>
          </li>

            <li>
              <a href="#">
                <FontAwesomeIcon icon={faCircleQuestion} />
                <span>ﾠﾠHelp Centre</span>
              </a>
            </li>
            
            <li onClick={() => navigate("/payment")}>
              <FontAwesomeIcon icon={faTent} />
              <span> Payment</span>
          </li>
          <li onClick={() => navigate("/managep")}>
              <FontAwesomeIcon icon={faTent} />
              <span> Manage Payment</span>
          </li>


          </ul>
        </div>
        <div className="main-content">
          <div className="title">Welcome {name || 'Mobiliser'}</div>
          <div className="box-container">
          <div className="box">
            <div className="box-title">Registered Candidates</div>
            <div className="box-number">100</div>
          </div>
          <div className="box">
            <div className="box-title">Moved Candidates</div>
            <div className="box-number">10</div>
          </div>
          <div className="box">
            <div className="box-title">Under Review Candidates</div>
            <div className="box-number">70</div>
          </div>
          <div className="box">
            <div className="box-title">Selected Candidates</div>
            <div className="box-number">18</div>
          </div>
          <div className="box">
            <div className="box-title">Rejected Candidates</div>
            <div className="box-number">2</div>
          </div>
        </div>
          <div className='graphs'>
          <div className="graph-container">
          <div className="graph-title">Student Count in Last 5 Months</div>
          <hr className="line" />
            <Plot
              data={graphData}
              layout={{
                width: 900,
                height: 500,
                // title: 'Student Count in Last 5 Months',
              }}
            />
          </div>
          <div className="pie-chart">
          <div className="graph-title">Payment Status</div>
          <hr className="line" />
          <Plot
            data={pieData}
            layout={{
              width: 500, // Adjusted width for the pie chart
              height: 500, // Adjusted height to match the bar graph
              // title: 'Payment Status',
            }}
          />
        </div>
        </div>
        <div className="table-container">
          <h2>Last 5 Registered Candidates</h2>
          <table className="custom-table">
      <thead className="custom-table-header">
        <tr>
          <th>Index Number</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Date of Registration</th>
        </tr>
      </thead>
      <tbody className="custom-table-body">
      {candidates.map((candidate, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{candidate.fullName}</td>
                  <td>{candidate.gender}</td>
                  <td>{candidate.age}</td>
                  <td>{new Date(candidate.registrationDate).toLocaleDateString()}</td>
                </tr>
              ))}
      </tbody>
    </table>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Mob_home;
