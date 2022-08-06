import "./instructors.scss";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { instructorColumns } from "../../datatablesource";

const Instructors = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable Columns={instructorColumns} title="Gym Instructor" />
      </div>
    </div>
  );
};

export default Instructors;
