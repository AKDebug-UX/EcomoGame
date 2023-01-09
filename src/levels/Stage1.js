import React, { useEffect, useRef, useState } from "react";
import uniqueCardsArray from "../../src/components/Stage1/data";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../components/Stage1/Card/index";
import Finish from "../components/Stage1/Finish/Index";


// FisherYates Modern Shuffle Algorithm
function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
function shuffleCards(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    swap(array, currentIndex, randomIndex);
  }
  return array;
}

const App = () => {
  const [cards, setCards] = useState(() =>
    shuffleCards(uniqueCardsArray.concat(uniqueCardsArray))
  );
  const [openCards, setOpencards] = useState([]);
  const [matchedCards, setMatchedcards] = useState({});
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
  );
  const timeout = useRef(null);

  const disable = () => {
    setShouldDisableAllCards(true);
  };

  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const checkCompletion = () => {
    if (Object.keys(matchedCards).length === uniqueCardsArray.length) {
      setShowModal(true);
      const highScore = Math.min(moves, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore);
    }
  };

  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    if (cards[first].type === cards[second].type) {
      setMatchedcards((prev) => ({ ...prev, [cards[first].type]: true }));
      setOpencards([]);
      // alert("you have found a match");
      return;
    }
    timeout.current = setTimeout(() => {
      setOpencards([]);
    }, 300);
  };

  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpencards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpencards([index]);
    }
  };
  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line
  }, [openCards]);

  useEffect(() => {
    // eslint-disable-next-line
    checkCompletion();
    // eslint-disable-next-line
  }, [matchedCards]);

  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };
  const checkIsInactive = (card) => {
    return Boolean(matchedCards[card.type]);
  };
  const handleRestart = () => {
    setMatchedcards({});
    setOpencards([]);
    setShowModal(false);
    setMoves(0);
    setShouldDisableAllCards(false);
    setCards(shuffleCards(uniqueCardsArray.concat(uniqueCardsArray)));
  };

  return (
    <div>
      
      <Header
        moves={moves}
        bestScore={bestScore}
        handleRestart={handleRestart}
      />
      
      <Container>
        <h5>STAGE: ONE(1)</h5>
        <Row>
          {cards.map((card, index) => {
            return (
              <Col xs={4} md={3} lg={2}>
                <Card
                  key={index}
                  card={card}
                  index={index}
                  isDisabled={shouldDisableAllCards}
                  isInactive={checkIsInactive(card)}
                  isFlipped={checkIsFlipped(index)}
                  onClick={handleCardClick}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Finish
        showModal={showModal}
        moves={moves}
        bestScore={bestScore}
        handleRestart={handleRestart}
      />
    </div>
  );
};

export default App;
