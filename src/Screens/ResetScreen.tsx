import React, { FC } from "react";
import styled from "styled-components";
import { Winner } from "../Components/Board/Board";
import { Button } from "../Components/Button/Button";

type ResetScreenProps = {
  winner: Winner;
  onReset(): void;
};

const WinnerHeadding = styled.h2`
  color: #333;
  text-align: center;
  margin-top: 0;
  font-size: 3rem;
`;

export const ResetScreen: FC<ResetScreenProps> = ({ winner, onReset }) => {
  return (
    <>
      <WinnerHeadding>
        {winner === "tie" ? "Deu velha" : `${winner} é o vencedor`}
      </WinnerHeadding>
      <Button onClick={onReset}> Reiniciar </Button>
    </>
  );
};
