import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./style.css";
import { Link, Router } from "react-router-dom";
// import Stage2 from "../../levels/Stage2";
// BrowserRouter as Router, Route,



const Finish = ({ handleRestart, showModal, bestScore, moves }) => {
 
  return (
    <div>
      
      <Dialog
        open={showModal}
        disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <h2>Ecomo Game</h2>
        <DialogTitle id="alert-dialog-title">
          Hurray !!! You completed the Ecomo Game  !!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You got {moves} moves. Your best score is {bestScore}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRestart} color="primary">Restart </Button>
          {/* <Router>
            <Link to='/Stage2'>Next Stage</Link>
          </Router> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Finish;
