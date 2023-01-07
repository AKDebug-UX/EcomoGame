import { Grid, Typography, Button, makeStyles } from "@material-ui/core";
import "./Onboarding.css";
import { useNavigate } from "react-router-dom";
// import onboardingWoman from "../../assets/onboarding-woman.svg";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "60px 60px",
  },
  inputBox: {
    width: "300px",
  },
  submitButton: {
    width: "300px",
  },
  content: {
    marginLeft: "30px",
    marginRight: "30px",
  },
}));

const Onboarding = (props) => {
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
      </div>

      <div className="bottom">
        <h2>EcomoGame</h2>
        <p className={classes.content}>
         The EcmoGame is a simple game to test the player’s memory. 
         In a deck of paired cards, the player needs to select a matching
         pair in consecutive turns. 
         The player wins the game when all matching pairs are selected.
        </p>
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          className={classes.submitButton}
          onClick={() => handleClick("/stage1")}
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

export default Onboarding;