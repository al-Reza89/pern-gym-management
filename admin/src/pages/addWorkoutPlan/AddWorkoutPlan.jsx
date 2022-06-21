import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./addWorkoutPlan.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../../api/BaseUrl";

const AddWorkoutPlan = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    member_id: undefined,
    instructor_id: undefined,
    workout_time: undefined,
    details: undefined,
  });

  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (info.member_id === undefined) {
      return alert("member id  Not be empty");
    } else if (info.instructor_id === undefined) {
      return alert("Instruction Id Not Be Empty");
    } else if (info.workout_time === undefined) {
      return alert("workout time must not be empty");
    } else if (info.details === undefined) {
      return alert("details must not Be Empty");
    } else {
      // console.log({ info: info });

      try {
        await BaseUrl.post("/workoutDetails", info);
        navigate("/workoutDetails");
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
                <TextField
                  id="instructor_id"
                  label="Instructor Id"
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
                  id="workout_time"
                  label="Work Out Time"
                  variant="standard"
                  placeholder="How many hour"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <TextField
                  id="details"
                  label="Details"
                  variant="standard"
                  placeholder="Write workout details"
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

export default AddWorkoutPlan;
