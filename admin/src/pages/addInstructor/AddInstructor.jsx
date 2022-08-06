import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./addInstructor.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../../api/BaseUrl";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const AddInstructor = () => {
  const navigate = useNavigate();
  const [failed, setFailed] = useState(false);
  const [info, setInfo] = useState({
    instructor_address: undefined,
    instructor_email: undefined,
    instructor_name: undefined,
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
    if (info.instructor_name === undefined) {
      return alert("Instructor name Not be empty");
    } else if (info.instructor_email === undefined) {
      return alert("Email  Not Be Empty");
    } else if (info.instructor_address === undefined) {
      return alert("address must not be empty");
    } else if (info.member_id === undefined) {
      return alert("member id must not Be Empty");
    } else {
      try {
        await BaseUrl.post("/instructors", info);
        navigate("/instructors");
      } catch (err) {
        return setFailed(true);
      }
    }
  };

  return (
    <div className="adduser">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Instructor</h1>
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
                  id="instructor_name"
                  label="Name"
                  variant="standard"
                  placeholder="instructor name"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <TextField
                  id="instructor_email"
                  label="Email"
                  variant="standard"
                  placeholder="instructor email"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <TextField
                  id="instructor_address"
                  label="Address"
                  variant="standard"
                  placeholder="street or road no."
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
                {failed && (
                  <Stack sx={{ width: "100%" }} spacing={2}>
                    <Alert severity="error">
                      Please Submit Different Email
                    </Alert>
                  </Stack>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInstructor;
