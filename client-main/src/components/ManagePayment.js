import React, { useState, useEffect } from "react";
import axios from "axios";
import PaymentTable from "./PaymentTable";

const ManagePayment = () => {
  const [no , setNo] =useState(0);
  const [ events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/get-student-events');
        console.log(response.data)
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, [no]);


  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Payment List</h2>
      <PaymentTable events={events} setNo={setNo} no={no}/>
    </div>
  );
};

export default ManagePayment;
