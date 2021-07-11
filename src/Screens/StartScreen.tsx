import React, { FC } from "react";
import { Button } from "../Components/Button/Button";

type StartScreenProps = {
  onStart(): void;
};

export const StartScreen: FC<StartScreenProps> = ({ onStart }) => {
  return <Button onClick={onStart}>Start</Button>;
};
