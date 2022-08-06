import "./singleProfile.css";
import logo from "../../images/logo.png";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Chip, Paper } from "@mui/material";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SingleProfile = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
    navigate("/");
  };

  return (
    <div className="profile">
      <Box sx={{ display: "flex" }} className="boxContainer">
        <CssBaseline />
        <AppBar position="fixed" className="appbar" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              <Link to={"/"}>
                <img className="logo" src={logo} alt="" />
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} className="drawer">
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List sx={{ backgroundColor: "#425258", height: "90.5vh" }}>
            {["Profile", "Account Settings", "Logout"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {text === "Profile" ? (
                      <AccountBoxIcon />
                    ) : text === "Logout" ? (
                      <LogoutIcon onClick={handleClick} />
                    ) : (
                      <ManageAccountsIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
        <Box
          component="main"
          sx={{
            marginTop: "66px",
            width: "100%",
            height: "100%",
            display: "flex",
          }}
        >
          <Box
            component="profile_info"
            sx={{ height: "90.5vh", width: "40vh", backgroundColor: "#417b8e" }}
          >
            <img
              style={{ marginLeft: "80px", marginTop: "20px" }}
              alt=""
              src="data:image/jpeg;base64,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"
            />
            <div style={{ height: "2px" }} />
            <Chip label="active" color="success" sx={{ marginLeft: "110px" }} />
            <div style={{ height: "10px" }} />
            <Typography variant="h6" align="center" sx={{ color: "#dee4e6" }}>
              Lionel Messi
            </Typography>
            <div style={{ marginLeft: "60px" }}>member since 18/06/21</div>
            <div style={{ height: "50px" }} />
            <Typography
              variant="h7"
              sx={{ color: "#224652", marginLeft: "20px" }}
            >
              ABOUT
            </Typography>
            <div className="about_info">
              <div style={{ width: "100px" }}>Gym ID</div>
              <div style={{ color: "#dee4e6" }}>2018331077</div>
            </div>
            <Divider
              sx={{
                width: "80%",
                bgcolor: "#000",
                marginLeft: "20px",
                marginTop: "5px",
              }}
            />
            <div className="about_info">
              <div style={{ width: "100px" }}>Email</div>
              <div style={{ color: "#dee4e6" }}>lm10@gmail.com</div>
            </div>
            <Divider
              sx={{
                width: "80%",
                bgcolor: "#000",
                marginLeft: "20px",
                marginTop: "5px",
              }}
            />
            <div className="about_info">
              <div style={{ width: "100px" }}>Birthday</div>
              <div style={{ color: "#dee4e6" }}>18/03/2000</div>
            </div>
            <Divider
              sx={{
                width: "80%",
                bgcolor: "#000",
                marginLeft: "20px",
                marginTop: "5px",
              }}
            />
            <div className="about_info">
              <div style={{ width: "100px" }}>Address</div>
              <div style={{ color: "#dee4e6" }}>Akhalia, Sylhet</div>
            </div>
            <Divider
              sx={{
                width: "80%",
                bgcolor: "#000",
                marginLeft: "20px",
                marginTop: "5px",
              }}
            />
            <div className="about_info">
              <div style={{ width: "100px" }}>Contract</div>
              <div style={{ color: "#dee4e6" }}>+8801760-107547</div>
            </div>
          </Box>
          <Box component="profile_gym">
            <Paper
              variant="outlined"
              elevation={12}
              sx={{
                marginLeft: "45px",
                marginTop: "25px",
                width: "150vh",
                height: "25vh",
                backgroundColor: "#dee4e6",
                borderRadius: "10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#417b8e",
                  borderRadius: "2px",
                  height: "40px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ marginLeft: "10px", color: "#dee4e6" }}
                >
                  Membership plans
                </Typography>
              </Box>
              <div className="about_info_2">
                <div style={{ width: "100px" }}>Gym ID</div>
                <div style={{ color: "#000" }}>2018331077</div>
              </div>
              <Divider
                sx={{
                  width: "95%",
                  bgcolor: "#417b8e",
                  marginLeft: "15px",
                  marginTop: "5px",
                }}
              />
              <div className="about_info_2">
                <div style={{ width: "100px" }}>Email</div>
                <div style={{ color: "#000" }}>lm10@gmail.com</div>
              </div>
              <Divider
                sx={{
                  width: "95%",
                  bgcolor: "#417b8e",
                  marginLeft: "15px",
                  marginTop: "5px",
                }}
              />
              <div className="about_info_2">
                <div style={{ width: "100px" }}>Birthday</div>
                <div style={{ color: "#000" }}>18/03/2000</div>
              </div>
              <Divider
                sx={{
                  width: "95%",
                  bgcolor: "#417b8e",
                  marginLeft: "15px",
                  marginTop: "5px",
                }}
              />
              <div className="about_info_2">
                <div style={{ width: "100px" }}>Address</div>
                <div style={{ color: "#000" }}>Akhalia, Sylhet</div>
              </div>
            </Paper>
            <Paper
              variant="outlined"
              elevation={12}
              sx={{
                marginLeft: "45px",
                marginTop: "25px",
                width: "150vh",
                height: "25vh",
                backgroundColor: "#dee4e6",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#417b8e",
                  borderRadius: "2px",
                  height: "40px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ marginLeft: "10px", color: "#dee4e6" }}
                >
                  Instructor Information
                </Typography>
              </Box>
              <div style={{ marginTop: "10px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                hendrerit quam sit amet porta scelerisque. Fusce sed nisi a enim
                rutrum condimentum eu maximus elit. Etiam consequat, felis sed
                luctus sodales, turpis sapien egestas erat, quis eleifend enim
                justo sollicitudin
              </div>
            </Paper>
            <Paper
              variant="outlined"
              elevation={12}
              sx={{
                marginLeft: "45px",
                marginTop: "25px",
                width: "150vh",
                height: "25vh",
                backgroundColor: "#dee4e6",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#417b8e",
                  borderRadius: "2px",
                  height: "40px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ marginLeft: "10px", color: "#dee4e6" }}
                >
                  Last Payment
                </Typography>
              </Box>
              <div style={{ marginTop: "10px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                hendrerit quam sit amet porta scelerisque. Fusce sed nisi a enim
                rutrum condimentum eu maximus elit. Etiam consequat, felis sed
                luctus sodales, turpis sapien egestas erat, quis eleifend enim
                justo sollicitudin
              </div>
            </Paper>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default SingleProfile;
