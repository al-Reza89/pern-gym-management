import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "user":
      data = {
        titleMain: "USERS",
        title: "Number Of user",
        NofUser: 100,
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
        NofUser: 10,
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

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.titleMain}</span>
        <span className="title">
          {data.title}: {data.NofUser}
        </span>
        <span className="link">{data.link}</span>
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
