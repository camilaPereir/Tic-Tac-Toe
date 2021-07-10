import React, { FC, useState } from "react";
import styled from "styled-components";

export type CellValue = "x" | "O" | undefined;

type CellProps = {
  value: CellValue;
  toggle: index(number)
};

const Cell = styled.div`
  background-color: #ffffff;
`;

export const Cell: FC = () => {};
