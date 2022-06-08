import "./users.scss";

import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { userRows } from "../../datatablesource";

const Users = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable dataRows={userRows} />
      </div>
    </div>
  );
};

export default Users;
