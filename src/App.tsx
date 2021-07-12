import React, { useState } from "react";
import styled from "styled-components";
import { Board, Winner } from "./Components/Board/Board";
import { BoardContainer } from "./Components/Board/BoardContainer";
import { ResetScreen } from "./Screens/ResetScreen";
import { StartScreen } from "./Screens/StartScreen";

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
      <Heading>Bem vindo ao nosso Game</Heading>
      <BoardContainer animate={gameState}>
        {
          {
            start: <StartScreen onStart={onStart} />,
            game: <Board onGameEnd={onGameEnd} />,
            reset: <ResetScreen winner={winner} onReset={onReset} />,
          }[gameState]
        }
      </BoardContainer>
    </>
  );
}

export default App;
