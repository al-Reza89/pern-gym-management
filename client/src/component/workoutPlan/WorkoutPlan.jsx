import "./workoutPlan.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import React from "react";
const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const WorkoutPlan = () => {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="workoutPlan">
      <div className="planTitle">
        <h1>Create Workout Plan:</h1>
      </div>
      <div className="inputfield">
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
          className="plandetails"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-basic"
          label="workout Time"
          className="plandetails"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="Details"
          multiline
          rows={4}
          className="plandetails"
        />
        <div className="plandetails">
          <button className="button">submit</button>
        </div>
      </div>
      <div className="copyright">
        <span>@gym.com</span>
      </div>
    </div>
  );
};

export default WorkoutPlan;
