import "./users.scss";

import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { userColumns } from "../../datatablesource";

const Users = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable Columns={userColumns} title="Application User" />
      </div>
    </div>
  );
};

export default Users;
