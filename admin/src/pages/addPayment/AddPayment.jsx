import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./addPayment.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../../api/BaseUrl";

const AddPayment = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    amount: undefined,
    remarks: undefined,
    payment_type: undefined,
    member_id: undefined,
  });

  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (info.amount === undefined) {
      return alert("amount  Not be empty");
    } else if (info.remarks === undefined) {
      return alert("remarks  Not Be Empty");
    } else if (info.payment_type === undefined) {
      return alert("payment  must not be empty");
    } else if (info.member_id === undefined) {
      return alert("member id must not Be Empty");
    } else {
      console.log({ info: info });
      try {
        await BaseUrl.post("/payments", info);
        navigate("/payments");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="adduser">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Payments</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <div className="formInput">
                <TextField
                  id="amount"
                  label="Amount"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <TextField
                  id="remarks"
                  label="Remarks"
                  variant="standard"
                  placeholder="first payment"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <TextField
                  id="payment_type"
                  label="Type"
                  variant="standard"
                  placeholder="registration + month fee"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <TextField
                  id="member_id"
                  label="Member Id"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <Button
                  onClick={handleClick}
                  className="button"
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPayment;
