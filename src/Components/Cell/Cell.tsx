import React, { FC } from "react";
import circle from "../../img/Circle.svg";
import cross from "../../img/cross.svg";
import { CellWrapper } from "./CellWrapper";
import { Shape } from "./Shape";

export type CellValue = "x" | "o" | undefined;

type CellProps = {
  value: CellValue;
  toggle(index: number): void;
  index: number;
};

export const Cell: FC<CellProps> = ({ value, toggle, index }) => {
  return (
    <CellWrapper onClick={() => toggle(index)}>
      {value === "o" ? (
        <Shape animate="visible" src={circle} />
      ) : value ? (
        <Shape animate="visible" src={cross} />
      ) : null}
    </CellWrapper>
  );
};
