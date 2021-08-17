import React from 'react';
import styled from 'styled-components';

const BackgroundLinesStyle = styled.div`
  box-sizing: border-box;
  pointer-events: none;
  height: 100%;
  width: 100%;
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
`;
const LineContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
`;
const Line = styled.span`
  box-sizing: border-box;
  display: block;
  position: absolute;
  height: 100%;
  z-index: 2;
  width: 1px;
  background-color: #d8d8d8;
  left: 10%;
  &:nth-child(2) {
    left: 30%;
  }
  &:nth-child(3) {
    left: 49.55%;
  }
  &:nth-child(4) {
    left: 70%;
  }
  &:nth-child(5) {
    left: 90%;
  }
`;

export default function BackgroundLines() {
  return (
    <BackgroundLinesStyle>
      <LineContainer>
        <Line></Line>
        <Line></Line>
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </LineContainer>
    </BackgroundLinesStyle>
  );
}
