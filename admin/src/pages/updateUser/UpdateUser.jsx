import "./updateUser.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import BaseUrl from "../../api/BaseUrl";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [failed, setFailed] = useState(false);
  const [info, setInfo] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BaseUrl.get(`/users/${id}`);
        setInfo(response.data.data);
      } catch (err) {}
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (info.first_name === "") {
      return alert("first name Not be empty");
    } else if (info.last_name === "") {
      return alert("Last Name Not Be Empty");
    } else if (info.email === "") {
      return alert("Email must not Be Empty");
    } else if (info.gender === "") {
      return alert("Gender not Be Empty");
    } else {
      // console.log({ info: info });

      try {
        await BaseUrl.put(`/users/${id}`, info);
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
                  value={info.first_name}
                  id="first_name"
                  label="First Name"
                  onChange={handleChange}
                  focused
                />
              </div>
              <div className="formInput">
                <TextField
                  value={info.middle_name || ""}
                  id="middle_name"
                  label="Middle Name"
                  onChange={handleChange}
                  focused
                />
              </div>
              <div className="formInput">
                <TextField
                  value={info.last_name || ""}
                  id="last_name"
                  label="Last Name"
                  onChange={handleChange}
                  focused
                />
              </div>
              <div className="formInput">
                <TextField
                  value={info.email || ""}
                  id="email"
                  label="Email"
                  onChange={handleChange}
                  focused
                />
              </div>
              <div className="formInput">
                <TextField
                  value={info.gender || ""}
                  id="gender"
                  label="Gender"
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

export default UpdateUser;
