import "./packages.scss";

import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { userRows } from "../../datatablesource";

const Packages = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable dataRows={userRows} title="Add new Package" />
      </div>
    </div>
  );
};

export default Packages;
