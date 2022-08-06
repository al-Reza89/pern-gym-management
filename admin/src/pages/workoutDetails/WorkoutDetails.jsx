import "./workoutDetails.scss";

import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { workoutPlanColumns } from "../../datatablesource";

const WorkoutDetails = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable
          Columns={workoutPlanColumns}
          title="WorkOut Details"
        />
      </div>
    </div>
  );
};

export default WorkoutDetails;
