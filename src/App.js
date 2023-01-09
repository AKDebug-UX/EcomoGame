import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";

import Onboarding, { ErrorPage } from "./components/OnboardingScreen/Onboarding";
import Start from "./levels/Start";
import Stage1 from "./levels/Stage1";
import Stage2 from "./levels/Stage2";
import MessagePopup from "../src/lib/MessagePopup";
import "./App.css";


export const SetPopupContext = createContext();

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const [popup, setPopup] = useState({
    open: false,
    severity: "",
    message: "",
  });
  return (
    <div className="con">
      {loading ? (
        <div className="loader-con">
          <div className="spinner">
            <p className="loader-img">🧩</p>
          </div>
        </div>
      ) : (
        <SetPopupContext.Provider value={setPopup}>
          <Grid container direction="column">
            <Grid item xs></Grid>
            <Grid item>
              <Routes>
                <Route exact path="/" element={<Onboarding />} />
                <Route exact path="/start" element={<Start />} />
                <Route exact path="/stage1" element={<Stage1 />} />
                <Route exact path="/stage2" element={<Stage2 />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </Grid>
          </Grid>
          <MessagePopup
            open={popup.open}
            setOpen={(status) =>
              setPopup({
                ...popup,
                open: status,
              })
            }
            severity={popup.severity}
            message={popup.message}
          />
        </SetPopupContext.Provider>
      )}
    </div>
  );
};

export default App;
