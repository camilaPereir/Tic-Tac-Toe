import React, { FC } from "react";
import styled from "styled-components";
import { Winner } from "./Board";
import { StartButton } from "./StartButton";

type ResetScreenProps = {
  winner: Winner;
  onReset(): void;
};

const WinnerHeadding = styled.h2`
  color: #333;
  text-align: center;
  margin-top: 0;
  font-size: 4rem;
`;

export const ResetScreen: FC<ResetScreenProps> = ({ winner, onReset }) => {
  return (
    <>
      <WinnerHeadding>
        {winner === "tie" ? "Deu velha" : `${winner} é o vencedor`}
      </WinnerHeadding>
      <StartButton onClick={onReset}> Reiniciar </StartButton>
    </>
  );
};
