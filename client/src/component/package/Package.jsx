import "./package.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import React from "react";

const Package = () => {
  return (
    <div className="package">
      <div className="packageContainer">
        <div className="packageTitle">
          <span>Choose Your Best Package:</span>
        </div>
        <div className="packageDetails">
          <div className="packageCard">
            <Card sx={{ maxWidth: 345 }} className="cardmedia">
              <CardMedia
                component="img"
                alt=""
                height="140"
                image="https://img.freepik.com/free-photo/strong-man-training-gym_1303-23478.jpg?w=1380&t=st=1656400828~exp=1656401428~hmac=6448825fe205c57849cb6f8569ada4a4e5593bc92d35d21b282a382e98caa3b2"
              />
              <CardContent className="cardComponent">
                <Typography gutterBottom variant="h5" component="div">
                  Package 1
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
                  Add Package
                </Button>
                <Button className="cardActionsButton" size="small">
                  Learn More
                </Button>
                <Button className="cardActionsButton" size="small">
                  $30 per month
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }} className="cardmedia">
              <CardMedia
                component="img"
                alt=""
                height="140"
                image="https://img.freepik.com/free-photo/strong-man-training-gym_1303-23478.jpg?w=1380&t=st=1656400828~exp=1656401428~hmac=6448825fe205c57849cb6f8569ada4a4e5593bc92d35d21b282a382e98caa3b2"
              />
              <CardContent className="cardComponent">
                <Typography gutterBottom variant="h5" component="div">
                  Package 1
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
                  Add Package
                </Button>
                <Button className="cardActionsButton" size="small">
                  Learn More
                </Button>
                <Button className="cardActionsButton" size="small">
                  $30 per month
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }} className="cardmedia">
              <CardMedia
                component="img"
                alt=""
                height="140"
                image="https://img.freepik.com/free-photo/strong-man-training-gym_1303-23478.jpg?w=1380&t=st=1656400828~exp=1656401428~hmac=6448825fe205c57849cb6f8569ada4a4e5593bc92d35d21b282a382e98caa3b2"
              />
              <CardContent className="cardComponent">
                <Typography gutterBottom variant="h5" component="div">
                  Package 1
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
                  Add Package
                </Button>
                <Button className="cardActionsButton" size="small">
                  Learn More
                </Button>
                <Button className="cardActionsButton" size="small">
                  $30 per month
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
