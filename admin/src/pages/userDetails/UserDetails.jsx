import "./userDetails.scss";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BaseUrl from "../../api/BaseUrl";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const UserDetails = () => {
  const [allInformation, setAllInformation] = useState();
  const { id } = useParams();
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  console.log(path);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BaseUrl.get(`/users/${id}`);
        setAllInformation(response.data);
      } catch (err) {}
    };
    fetchData();
  }, []);

  console.log(allInformation);

  if (!allInformation) return null;

  return (
    <div className="adduser">
      <Sidebar />
      <div className="navContainer">
        <Navbar />
        <div className="container">
          <div className="userInformation">
            <div className="boxshadow">
              <h3>USER INFORMATION:</h3>
              <span className="data">User Id: {allInformation?.data?.id}</span>
              <span className="data">
                First Name : {allInformation?.data?.first_name}
              </span>
              <span className="data">
                Middle Name : {allInformation?.data?.middle_name}
              </span>
              <span className="data">
                Last Name: {allInformation?.data?.last_name}
              </span>
              <span className="data">
                User Email: {allInformation?.data?.email}
              </span>
              <span className="data">
                Joingin Date: {allInformation?.data?.joining_date}
              </span>
              <span className="data">
                Gender: {allInformation?.data?.gender}
              </span>
            </div>
          </div>
          <div className="instructorInformation">
            <div className="boxshadow">
              <h3>INSTRUCTION INFORMATION:</h3>
              <span className="data">
                Instructor Id: {allInformation?.allInformation?.instructor_id}
              </span>
              <span className="data">
                Name: {allInformation?.allInformation?.instructor_name}
              </span>
              <span className="data">
                Email: {allInformation?.allInformation?.instructor_email}
              </span>
              <span className="data">
                Address: {allInformation?.allInformation?.instructor_address}
              </span>
            </div>
          </div>
          <div className="packageInformation">
            <div className="boxshadow">
              <h3>PACKAGE INFORMATION:</h3>
              <span className="data">
                Package Id: {allInformation?.allInformation?.id}
              </span>
              <span className="data">
                Description: {allInformation?.allInformation?.descriptions}
              </span>
              <span className="data">
                Details: {allInformation?.allInformation?.details}
              </span>
              <span className="data">
                Package: {allInformation?.allInformation?.package}
              </span>
            </div>
          </div>
          <div className="paymentDetails">
            <div className="boxshadow">
              <h3>PAYMENT INFORMATION:</h3>
              <span className="data">
                Payment Id: {allInformation?.allInformation?.id}
              </span>
              <span className="data">
                Date: {allInformation?.allInformation?.remarks}
              </span>
              <span className="data">
                Type: {allInformation?.allInformation?.payment_type}
              </span>
              <span className="data">
                Amount : {allInformation?.allInformation?.amount}
              </span>
            </div>
          </div>
          <div className="paymentDetails">
            <div className="boxshadow">
              <h3>WORKOUT INFORMATION:</h3>
              <span className="data">
                Details: {allInformation?.allInformation?.details}
              </span>
              <span className="data">
                Workout Time: {allInformation?.allInformation?.workout_time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
