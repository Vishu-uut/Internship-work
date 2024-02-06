import React, {useEffect, useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit } from '@fortawesome/free-solid-svg-icons';
//import ReactPaginate from 'react-paginate';
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./candidate_view.css";
import axios from 'axios';

export default function AdminHome({ userData }) {

  const navigate=useNavigate();
  //setting state
  const [data, setData] = useState([]);
  //const [limit,setLimit]=useState(5);
  //const [pageCount,setPageCount]=useState(1);
  const currentPage=useRef();



  useEffect(() => {
    currentPage.current = 1;
    getAllUser();
    //getPaginatedUsers();
  //}, [getPaginatedUsers]);
  })
  


  //fetching all user
  const getAllUser = () => {
    axios
      .get('http://localhost:5000/students')
      .then((response) => {
        const lastdata=response.data;
        
        setData(lastdata);

        // setName(response.data.name);
        // setLast5MonthsData(response.data.last5MonthsData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

  };



//logout
  const logOut = () => {
    window.localStorage.clear();                //cleans up our local storage
    window.location.href = "./";         //navigate it to login page
  };


  // //deleting user
  const deleteUser = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      fetch("http://localhost:5000/deleteUser", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAllUser();
        });
    } else {
    }
  };

  // //pagination
  // function handlePageClick(e) {
  //   console.log(e);
  //  currentPage.current=e.selected+1;
  //   getPaginatedUsers();
   

  // }
  // function changeLimit(){
  //   currentPage.current=1;
  //   getPaginatedUsers();
  // }

  // function getPaginatedUsers(){
  //   fetch(`http://localhost:5000/paginatedUsers?page=${currentPage.current}&limit=${limit}`, {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data, "userData");
  //       setPageCount(data.pageCount);
  //       setData(data.result)
        
       
  //     });

  // }

  return (
    <div className="adminHomeWrapper">
      <div className="adminHomeInner">
        <h3 className="adminHomeHeader">Registered Candidates</h3>
        <table className="adminHomeTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Father's Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i) => (
              <tr key={i._id}>
                <td>{i.fullName}</td>
                <td>{i.gender}</td>
                <td>{i.fathersName}</td>
                <td>
                  <FontAwesomeIcon
                    icon={faEye}
                    onClick={() => navigate("/just-view-candidate", { state: i })}
                  />
                  <FontAwesomeIcon
                    icon={faEdit}
                    onClick={() => navigate("/candidate-update", { state: i })}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteUser(i._id, i.fname)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={logOut} className="adminHomeButton">
          Log Out
        </button>
      </div>
    </div>
  );
}












{/* <FontAwesomeIcon
icon={faTrash}
onClick={() => deleteUser(i._id, i.fname)}
/>
</td>
</tr>
);
})}
</tbody>

</table>
{/* <ReactPaginate
breakLabel="..."
nextLabel="next >"
onPageChange={handlePageClick}
pageRangeDisplayed={5}
pageCount={pageCount}
previousLabel="< previous"
renderOnZeroPageCount={null}
marginPagesDisplayed={2}
containerClassName="pagination justify-content-center"
pageClassName="page-item"
pageLinkClassName="page-link"
previousClassName="page-item"
previousLinkClassName="page-link"
nextClassName="page-item"
nextLinkClassName="page-link"
activeClassName="active"
forcePage={currentPage.current-1}
/> */}
{/* <input placeholder="Limit" onChange={e=>setLimit(e.target.value)}/> 
{<button onClick={changeLimit}>Set Limit</button>*/}

{/* <button onClick={logOut} className="btn btn-primary">
Log Out
</button> 

</div>
</div>
);
} */} 