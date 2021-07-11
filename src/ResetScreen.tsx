import React, { FC } from "react";
import { Winner } from "./Board";

type ResetScreenProps = {
  winner: Winner;
  onReset(): void;
};

export const ResetScreen: FC<ResetScreenProps> = ({ winner, onReset }) => {
  return (
    <>
      <h2> {winner} é o ganhador! </h2>
      <button onClick={onReset}> Reiniciar </button>
    </>
  );
};
