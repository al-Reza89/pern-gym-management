import "./payments.scss";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { paymentColumns } from "../../datatablesource";

const Payments = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable Columns={paymentColumns} title="Add new Payments" />
      </div>
    </div>
  );
};

export default Payments;
