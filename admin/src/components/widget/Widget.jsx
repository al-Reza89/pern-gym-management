import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { useEffect } from "react";
import BaseUrl from "../../api/BaseUrl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Widget = ({ type }) => {
  const navigate = useNavigate();
  const [nofusers, setNofusers] = useState(null);
  const [nofinst, setNofinst] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await BaseUrl.get("/users");
        const instructors = await BaseUrl.get("/instructors");
        // console.log({ user: users.data.data.length });
        // console.log({ inst: instructors.data.data.length });
        setNofusers(users.data.data.length);
        setNofinst(instructors.data.data.length);
      } catch (err) {}
    };

    fetchData();
  });

  let data;

  switch (type) {
    case "user":
      data = {
        titleMain: "USERS",
        title: "Number Of user",
        NofUser: nofusers,
        money: 0,
        link: "See all User",
        icon: (
          <PersonOutlinedIcon
            style={{
              color: "green",
            }}
          />
        ),
      };
      break;

    case "instructor":
      data = {
        titleMain: "INSTRUCTORS",
        title: "Number Of instructor",
        NofUser: nofinst,
        money: 0,
        link: "See all instructor",
        icon: (
          <PersonOutlinedIcon
            style={{
              color: "green",
            }}
          />
        ),
      };
      break;

    case "earnings":
      data = {
        titleMain: "EARNINGS",
        title: "Total Earnings",
        NofUser: 20000,
        money: 0,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            style={{
              color: "green",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        titleMain: "BALANCE",
        title: "Present net balance",
        NofUser: 2000,
        money: 0,
        link: "View net balance",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            style={{
              color: "green",
            }}
          />
        ),
      };
      break;

    default:
      break;
  }

  const handleClick = (link) => {
    if (link === "See all instructor") {
      navigate("/instructors");
    } else if (link === "See all User") {
      navigate("/users");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.titleMain}</span>
        <span className="title">
          {data.title}: {data.NofUser}
        </span>
        <span onClick={() => handleClick(data.link)} className="link">
          {data.link}
        </span>
      </div>
      <div className="right">
        <div className="percentage positive  ">
          <KeyboardArrowUpIcon />
          20%
        </div>
        <div className="cornerIcon">{data.icon}</div>
      </div>
    </div>
  );
};

export default Widget;
