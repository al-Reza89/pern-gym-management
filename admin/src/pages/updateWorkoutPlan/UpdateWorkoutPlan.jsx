import "./updateWorkoutPlan.scss";

import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import BaseUrl from "../../api/BaseUrl";
import { useNavigate, useParams } from "react-router-dom";

const UpdateWorkoutPlan = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BaseUrl.get(`/workoutDetails/${id}`);
        setInfo(response.data.data);
      } catch (err) {}
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (info.amount === "") {
      return alert(" amount Not be empty");
    } else if (info.package === "") {
      return alert("package Not Be Empty");
    } else if (info.descriptions === "") {
      return alert("description must not Be Empty");
    } else if (info.member_id === "") {
      return alert("member id not Be Empty");
    } else {
      try {
        await BaseUrl.put(`/workoutDetails/${id}`, info);
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
                  value={info.member_id}
                  id="member_id"
                  label="Member Id"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  onChange={handleChange}
                  focused
                />
              </div>
              <div className="formInput">
                <TextField
                  value={info.instructor_id}
                  id="instructor_id"
                  label="Instructor Id"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  onChange={handleChange}
                  focused
                />
              </div>
              <div className="formInput">
                <TextField
                  value={info.workout_time}
                  id="workout_time"
                  label="Work Out Time"
                  variant="standard"
                  placeholder="How many hour"
                  onChange={handleChange}
                  focused
                />
              </div>
              <div className="formInput">
                <TextField
                  value={info.details}
                  id="details"
                  label="Details"
                  variant="standard"
                  placeholder="Write workout details"
                  onChange={handleChange}
                  focused
                />
              </div>
              <div className="formInput">
                <Button
                  className="button"
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
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

export default UpdateWorkoutPlan;
