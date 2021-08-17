import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageSlider from '../components/Carousel';
import bath from '../images/bath.webp';
import hall from '../images/hall.webp';
import oils from '../images/oils.webp';

const LandingWrapper = styled.div`
  height: 100vh;
  position: relative;
`;
const LandingBackground = styled.div`
  height: 95vh;
  background: #566351;
  padding-top: 50px;
  width: 50%;
  position: absolute;
  z-index: 2;
`;
const CarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eaeaea;
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
            <h1>Hello</h1>
          </CarouselWrapper>
        </LandingWrapperCenter>
      </LandingWrapper>
    </>
  );
}
