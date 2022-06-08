import "./instructors.scss";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { userRows } from "../../datatablesource";

const Instructors = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable dataRows={userRows} title="Add New Instructor" />
      </div>
    </div>
  );
};

export default Instructors;
