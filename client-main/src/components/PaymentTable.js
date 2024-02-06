import React from 'react'

const PaymentTable = ({events}) => {
    return (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th className="thStyle thTd">S.no</th>
                <th className="thStyle thTd">Name</th>
                <th className="thStyle thTd">Father Name</th>
                <th className="thStyle thTd">Adhaar No.</th>
                <th className="thStyle thTd">Mobile No.</th>
                <th className="thStyle thTd">District</th>
                <th className="thStyle thTd">Registration Date</th>
                <th className="thStyle thTd">Mobiliser Name</th>
                <th className="thStyle thTd">Payment Status</th>
                <th className="thStyle thTd">Remarks</th>
                
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.sno} >
                  <td className="thTd">{event.sno}</td>
                  <td className="thTd">{event.name}</td>
                  <td className="thTd">{event.fatherName}</td>
                  <td className="thTd">{event.adhaarNo}</td>
                  <td className="thTd">{event.mobileNo}</td>
                  <td className="thTd">{event.district}</td>
                  <td className="thTd">{event.registrationDate}</td>
                  <td className="thTd">{event.mobiliserName}</td>
                  <td className="thTd">{event.paymentStatus}</td>
                  <td className="thTd">{event.remarks}</td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    
    
}

export default PaymentTable;