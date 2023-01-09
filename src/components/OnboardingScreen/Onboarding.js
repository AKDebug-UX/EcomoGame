import React, { useEffect, useRef, useState } from "react";
import { Grid, Typography, Button, makeStyles } from "@material-ui/core";
import "./Onboarding.css";
import { useNavigate } from "react-router-dom";
import Modal from '@material-ui/core/Modal';
import welcome from "../../image/welcome.jpeg";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "10px 10px",
  },
  inputBox: {
    width: "300px",
  },
  submitButton: {
    width: "300px",
  },
  stage1: {
    width: "300px",
    top: "145px",
    marginLeft: "20px",
  },
  welcome: {
    height: "0px",
    width: "10px",
    top: "0px",
    marginLeft: "60px",
  },

  content: {
    marginLeft: "30px",
    marginRight: "30px",
    color: "white",
  },
  ecomogame: {
    marginLeft: "30px",
    marginRight: "30px",
    color: "rgb(30, 255, 0)",
  },
}));

export default function Onboarding(props) {
  const [open, setOpen] = React.useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };
    
  const handleOpen = () => {
    setOpen(true);
  };
  const classes = useStyles();
  let navigate = useNavigate();
  const handleClick = (location) => {
    console.log(location);
    navigate(location);
  };
  return (
    <div className="all">
      <div className="top">
        <p className="p">🧩</p>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div>
          <p className="EcomoGame">EcomoGame</p>
        </div>
        <p className={classes.content}>
         The EcomoGame is a simple game to test the player’s memory. 
         In a deck of paired cards, the player needs to select a matching
         pair in consecutive turns. 
         The player wins the game when all matching pairs are selected.
        </p>
      </div>

      <div className="bottom">
      <div style={{ display: 'block', padding: 30 }}>
      <Modal
        onClose={handleClose}
        open={open}
        style={{
          position: 'absolute',
          border: '2px solid rgb(30, 255, 0)',
          backgroundColor: 'gray',
          boxShadow: '2px solid black',
          height:200,
          width: 340,
          margin: 'auto'
        }}
      >
        <h2>
        <div className={classes.welcome}>
            <p className="loader-wel">welcome</p>
            <p className="to">to</p>
            <p className="name">EcomoGame</p>
        </div>
        <Button
            variant="contained"
            color="primary"
            className={classes.stage1}
            onClick={() => handleClick("/stage1")}>
              Get Started</Button>
          
        </h2>
      </Modal>
    </div>
        <Button
          variant="contained"
          color="primary"
          className={classes.submitButton}
          onClick={handleOpen}
        >
          START
        </Button>
      </div>
      <Grid item></Grid>
    </div>
  );
};
export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};
