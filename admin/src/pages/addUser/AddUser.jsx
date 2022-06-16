import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./addUser.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import BaseUrl from "../../api/BaseUrl";
import { userColumns } from "../../datatablesource";

const AddUser = () => {
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
                  id=""
                  label=""
                  placeholder="name"
                  multiline
                  variant="standard"
                />
              </div>
              <div className="formInput">
                <TextField
                  id=""
                  label=""
                  placeholder="name"
                  multiline
                  variant="standard"
                />
              </div>
              <div className="formInput">
                <TextField
                  id=""
                  label=""
                  placeholder="name"
                  multiline
                  variant="standard"
                />
              </div>
              <div className="formInput">
                <TextField
                  id=""
                  label=""
                  placeholder="name"
                  multiline
                  variant="standard"
                />
              </div>
              <div className="formInput">
                <TextField
                  id=""
                  label=""
                  placeholder="name"
                  multiline
                  variant="standard"
                />
              </div>
              <div className="formInput">
                <TextField
                  id=""
                  label=""
                  placeholder="name"
                  multiline
                  variant="standard"
                />
              </div>
              <div className="formInput">
                <Button className="button" variant="contained" color="primary">
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

export default AddUser;
