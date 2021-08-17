import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageSlider from '../components/Carousel';
import bath from '../images/bath.webp';
import hall from '../images/hall.webp';
import oils from '../images/oils.webp';

const LandingWrapper = styled.div`
  height: 100%;
  position: relative;
`;
const LandingBackground = styled.div`
  height: 100%;
  background: #566351;
  padding-top: 50px;
  width: 50%;
  position: absolute;
  z-index: 2;
`;
const LandingWrapperCenter = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  z-index: 3;
  position: relative;
  padding: 160px 0 115px;
  width: 80%;
`;
const CarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #eaeaea; */
`;
const LandingText = styled.div`
  display: block;
  text-align: left;
  position: relative;
  padding-right: 20px;
  font-size: 42px;
  transform: scale(0.7, 1);
`;

export default function Landing() {
  // const wrapper = useRef(null);
  // useEffect(() => {
  //   const elements = wrapper.current.children;
  // });

  return (
    <>
      <LandingWrapper>
        <LandingBackground />
        <LandingWrapperCenter>
          <CarouselWrapper>
            <ImageSlider images={[bath, hall, oils]} />
            <h2>
              <LandingText>BLABLABLABLA OHMYGOD</LandingText>
              <LandingText>TAKE ME TO BLALALALA</LandingText>
              <LandingText>BLABLABAL THE SPA</LandingText>
              <LandingText>BLABLABAL DRATEWKA</LandingText>
            </h2>
          </CarouselWrapper>
        </LandingWrapperCenter>
      </LandingWrapper>
    </>
  );
}
