import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const variants = {
  hidden: { opacity: 0.5, transform: "translate3d(-50%, -50%, 0) scale(0.5)" },
  visible: { opacity: 1, transform: "translate3d(-50%, -50%, 0) scale(1)" },
};

export const Shape = styled(motion.img).attrs(() => ({
  initial: "hidden",
  variants,
}))`
  height: 60px;
  width: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
`;
