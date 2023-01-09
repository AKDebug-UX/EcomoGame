import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./finish.css";
import { useNavigate } from "react-router-dom";



const Finish = ({ handleRestart, showModal, bestScore, moves }) => {
  let navigate = useNavigate();
  const handleClick = (location) => {
    console.log(location);
    navigate(location);
  };
  return (
    <div>
      
      <Dialog
        open={showModal}
        disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="Ecomo">
          <p className="Ecomog">EcomoGame</p>
      </div>
        <DialogTitle id="alert-dialog-title">
          Hurray !!! You completed the EcomoGame Stage 1 !!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You got {moves} moves. Your best score is {bestScore}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRestart} color="primary">Restart </Button>
          <Button onClick={() => handleClick("/stage2")} color="primary">Next Stage</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Finish;
