import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./addUser.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import BaseUrl from "../../api/BaseUrl";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const [failed, setFailed] = useState(false);
  const [info, setInfo] = useState({
    first_name: undefined,
    middle_name: undefined,
    last_name: undefined,
    email: undefined,
    password: undefined,
    gender: undefined,
  });

  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (info.first_name === undefined) {
      return alert("first name Not be empty");
    } else if (info.last_name === undefined) {
      return alert("Last Name Not Be Empty");
    } else if (info.password === undefined) {
      return alert("Password must not be empty");
    } else if (info.email === undefined) {
      return alert("Email must not Be Empty");
    } else if (info.gender === undefined) {
      return alert("Gender not Be Empty");
    } else {
      // console.log({ info: info });

      try {
        await BaseUrl.post("/auth/register", info);
        navigate("/users");
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
                  id="first_name"
                  label="First Name"
                  variant="standard"
                  placeholder="ABC"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <TextField
                  id="middle_name"
                  label="Middle Name"
                  variant="standard"
                  placeholder="CDE"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <TextField
                  id="last_name"
                  label="Last Name"
                  variant="standard"
                  placeholder="EFG"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <TextField
                  id="email"
                  label="Email"
                  variant="standard"
                  placeholder="name@gmail.com"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="standard"
                  placeholder="Your password"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <TextField
                  id="gender"
                  label="Gender"
                  variant="standard"
                  placeholder="Male/Female"
                  onChange={handleChange}
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

export default AddUser;
