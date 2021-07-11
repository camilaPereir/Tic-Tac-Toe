import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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

export const BoardContainer = styled(motion.div).attrs(() => ({
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
  margin-bottom: 2em;
`;
