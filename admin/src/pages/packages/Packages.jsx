import "./packages.scss";

import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { packageColumns } from "../../datatablesource";

const Packages = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable Columns={packageColumns} title="Add new Package" />
      </div>
    </div>
  );
};

export default Packages;
