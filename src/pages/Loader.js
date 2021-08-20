import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const LoaderWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #191919;
  color: #d8d8d8;
  h1 {
    font-size: 2.5vw;
    text-transform: uppercase;
    font-weight: 600;
  }
  h2 {
    font-size: 1.5vw;
    text-transform: uppercase;
    font-style: italic;
    margin-top: 15px;
  }
`;
//motion var

export default function Loader() {
  return (
    <LoaderWrapper
      animate={{ x: '-100%' }}
      transition={{ duration: 3, type: 'tween' }}
    >
      <h1>Touch of nature</h1>
      <h2>Perfect harmony</h2>
    </LoaderWrapper>
  );
}
