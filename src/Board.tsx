/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Cell, CellValue } from "./Cell";

const BoardWrapper = styled.div`
  background-color: #999999;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  column-gap: 6px;
  row-gap: 6px;
`;

export type Winner = CellValue | "tie";

type BoardProps = {
  onGameEnd(winner: Winner): void;
};

// prettier-ignore
const winnerConditions = [
  [0,1,2], [3,4,5], [6,7,8], //Horizontal
  [0,3,6], [1,4,7], [2,5,8], //Vertical
  [0,4,8], [2,4,6] //Diagonal
]

export const Board: FC<BoardProps> = ({ onGameEnd }) => {
  const [cells, setCells] = useState<CellValue[]>(Array(9).fill(undefined));

  const currentShape: CellValue = cells.filter(Boolean).length % 2 ? "o" : "x";

  const winningCondition = winnerConditions.find((condition) => {
    const line = condition.map((cellIndex) => cells[cellIndex]);
    return line[0] && line.every((cellValue) => cellValue === line[0]);
  });

  const tie = cells.filter(Boolean).length === 9;

  const winningShape = winningCondition
    ? cells[winningCondition[0]]
    : undefined;

  const toggleCell = (index: number) => {
    setCells((cells) => cells.map((c, i) => (i === index ? currentShape : c)));
  };

  useEffect(() => {
    if (winningShape) {
      return onGameEnd(winningShape);
    }
    if (tie) {
      return onGameEnd("tie");
    }
  }, [winningShape, tie, onGameEnd]);

  return (
    <BoardWrapper>
      {cells.map((cell, i) => (
        <Cell key={i} value={cell} index={i} toggle={toggleCell} />
      ))}
    </BoardWrapper>
  );
};
