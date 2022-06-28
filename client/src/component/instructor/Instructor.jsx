import "./instructor.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import React from "react";

const Instructor = () => {
  return (
    <div className="package">
      <div className="packageContainer">
        <div className="packageTitle">
          <h1>Choose Your Best Instructor:</h1>
        </div>
        <div className="packageDetails">
          <div className="packageCard">
            <Card sx={{ maxWidth: 345 }} className="cardmedia">
              <CardMedia
                component="img"
                alt=""
                height="140"
                image="https://thumbs.dreamstime.com/z/personal-trainer-gym-his-back-facing-camera-looking-31177587.jpg"
              />
              <CardContent className="cardComponent">
                <Typography gutterBottom variant="h5" component="div">
                  instructor Name
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="typography"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore error enim commodi dignissimos sit sint numquam neque
                  reprehenderit ea, sequi hic rerum vitae maxime voluptates!
                  Fuga minus beatae fugit nemo.
                </Typography>
              </CardContent>
              <CardActions className="cardActions">
                <Button className="cardActionsButton" size="small">
                  Add Instructor
                </Button>
                <Button className="cardActionsButton" size="small">
                  Learn More
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }} className="cardmedia">
              <CardMedia
                component="img"
                alt=""
                height="140"
                image="https://thumbs.dreamstime.com/z/personal-trainer-gym-his-back-facing-camera-looking-31177587.jpg"
              />
              <CardContent className="cardComponent">
                <Typography gutterBottom variant="h5" component="div">
                  Instructor Name
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="typography"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore error enim commodi dignissimos sit sint numquam neque
                  reprehenderit ea, sequi hic rerum vitae maxime voluptates!
                  Fuga minus beatae fugit nemo.
                </Typography>
              </CardContent>
              <CardActions className="cardActions">
                <Button className="cardActionsButton" size="small">
                  Add Instructor
                </Button>
                <Button className="cardActionsButton" size="small">
                  Learn More
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }} className="cardmedia">
              <CardMedia
                component="img"
                alt=""
                height="140"
                image="https://thumbs.dreamstime.com/z/personal-trainer-gym-his-back-facing-camera-looking-31177587.jpg"
              />
              <CardContent className="cardComponent">
                <Typography gutterBottom variant="h5" component="div">
                  Instructor Name
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="typography"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore error enim commodi dignissimos sit sint numquam neque
                  reprehenderit ea, sequi hic rerum vitae maxime voluptates!
                  Fuga minus beatae fugit nemo.
                </Typography>
              </CardContent>
              <CardActions className="cardActions">
                <Button className="cardActionsButton" size="small">
                  Add Instructor
                </Button>
                <Button className="cardActionsButton" size="small">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
