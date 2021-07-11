import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Board, Winner } from "./Board";
import { ResetScreen } from "./ResetScreen";
import { StartScreen } from "./StartScreen";

const variants = {
  game: {
    opacity: 1,
    scale: 1,
    width: "500px",
    height: "500px",
    transaction: { type: "spring", duration: 0.8 },
  },
  start: {
    opacity: 1,
    scale: 1,
    width: "200px",
    height: "100px",
    transaction: { type: "spring", duration: 0.8 },
  },
  reset: {
    opacity: 1,
    scale: 1,
    width: "350px",
    height: "300px",
    transaction: { type: "spring", duration: 0.8 },
  },
  hidden: { opacity: 0, scale: 0.8 },
};

const BoardContainer = styled(motion.div).attrs(() => ({
  initial: "hidden",
  variants,
}))`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: -6px 10px 30px 4px #ffffff12;
  border: 20px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

type GameState = "start" | "game" | "reset";

function App() {
  const [winner, setWinner] = useState<Winner>();
  const [gameState, setGameState] = useState<GameState>("start");
  const onStart = () => {
    setGameState("game");
  };
  const onGameEnd = (winner: Winner) => {
    setWinner(winner);
    setGameState("reset");
  };

  const onReset = () => {
    setWinner(undefined);
    setGameState("game");
  };

  const Heading = styled.h1`
    color: #ffffff;
    text-align: center;
    margin-bottom: 50px;
    font-size: 4rem;
  `;

  return (
    <>
      <Heading>Tic Tac Toe</Heading>
      <BoardContainer animate={gameState}>
        {
          {
            start: <StartScreen onStart={onStart} />,
            game: <Board onGameEnd={onGameEnd} />,
            reset: <ResetScreen winner={winner} onReset={onReset} />,
          }[gameState]
        }
      </BoardContainer>
      <p>Desenvolvido por Camila Pereira</p>
    </>
  );
}

export default App;
