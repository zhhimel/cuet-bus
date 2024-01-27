import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";


function User() {
  const { user } = useSelector((state) => state.users);
  const [bill, setBill] = useState([]);
  const [seatc,setSeatc]=useState(0);
  var temp=0;
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`api/bookings/${user._id}`);
        setBill(response.data.data);
        
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
    
  }, []); 
  for(let i=0;i<bill.length;i++){
      
       temp+=bill[i].seats.length;
  }
  
  console.log(temp)
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{user?.name}</h2>
          <p className="card-text">Total Bill: Tk. {temp*100}</p>
          <p className="card-text">Total Bookings: {bill.length}</p>
          
        </div>
      </div>
      {/* Add additional components or sections as needed */}
    </div>
  );
}

export default User;
