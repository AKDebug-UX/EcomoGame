import React from "react";
import "./header.css";
import { Container } from "react-bootstrap";
import { FaRedo } from "react-icons/fa";

const Header = ({ moves, bestScore, handleRestart }) => {
  return (
    <div>
      <div className="Ecomo">
          <p className="Ecomog">EcomoGame</p>
      </div>
      <br/><br/>
      <Container>
        <div className="sub-header">
          <div className="moves">
            <span className="bold">Moves:</span>
            {moves}
          </div>
          <div className="reshuffle">
            <button onClick={handleRestart}>
              <FaRedo />
            </button>
          </div>
          {localStorage.getItem("bestScore") && (
            <div className="high-score">
              <span>Best Score:</span>
              {bestScore}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Header;
