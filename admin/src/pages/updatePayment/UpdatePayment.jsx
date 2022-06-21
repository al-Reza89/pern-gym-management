import "./updatePayment.scss";

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

const UpdatePayment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [failed, setFailed] = useState(false);
  const [info, setInfo] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BaseUrl.get(`/payments/${id}`);
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
    if (info.instructor_name === "") {
      return alert(" name Not be empty");
    } else if (info.instructor_email === "") {
      return alert("Email Not Be Empty");
    } else if (info.instructor_address === "") {
      return alert("Address must not Be Empty");
    } else if (info.member_id === "") {
      return alert("member id not Be Empty");
    } else {
      try {
        await BaseUrl.put(`/payments/${id}`, info);
        navigate("/payments");
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
                  value={info.amount}
                  id="amount"
                  label="Amount"
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
                  value={info.remarks}
                  id="remarks"
                  label="Remarks"
                  variant="standard"
                  placeholder="first payment"
                  onChange={handleChange}
                  focused
                />
              </div>
              <div className="formInput">
                <TextField
                  value={info.payment_type}
                  id="payment_type"
                  label="Type"
                  variant="standard"
                  placeholder="registration + month fee"
                  onChange={handleChange}
                  focused
                />
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

export default UpdatePayment;
