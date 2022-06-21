import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./addPackage.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../../api/BaseUrl";

const AddPackage = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    package: undefined,
    descriptions: undefined,
    amount: undefined,
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
    if (info.package === undefined) {
      return alert("Package name Not be empty");
    } else if (info.descriptions === undefined) {
      return alert("description  Not Be Empty");
    } else if (info.amount === undefined) {
      return alert("amount must not be empty");
    } else if (info.member_id === undefined) {
      return alert("member id must not Be Empty");
    } else {
      try {
        await BaseUrl.post("/packages", info);
        navigate("/packages");
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
          <h1>Add New User</h1>
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
                  id="package"
                  label="Package"
                  variant="standard"
                  placeholder="Package"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <TextField
                  id="descriptions"
                  label="Package Description"
                  variant="standard"
                  placeholder="description"
                  onChange={handleChange}
                />
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

export default AddPackage;
