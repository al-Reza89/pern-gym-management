import "./userDetails.scss";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BaseUrl from "../../api/BaseUrl";
import { useLocation } from "react-router-dom";

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
    <div>
      <div className="userInformation">
        <span className="Id">User Id : {allInformation?.data?.id}</span>
      </div>
    </div>
  );
};

export default UserDetails;
