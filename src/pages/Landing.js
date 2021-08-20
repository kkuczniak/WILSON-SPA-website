import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import ImageSlider from '../components/Carousel';
import bath from '../images/bath.webp';
import hall from '../images/hall.webp';
import pool from '../images/pool.webp';

const LandingWrapper = styled.div`
  height: 100%;
  position: relative;
`;
const LandingBackground = styled(motion.div)`
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
`;
const LandingText = styled(motion.div)`
  display: block;
  text-align: left;
  position: relative;
  padding-right: 20px;
  font-size: calc(16px + 39 * ((100vw - 320px) / 1600));
  transform: scale(0.9, 1);
`;
//motion var
const textAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1, duration: 4 },
};
const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export default function Landing() {
  // const wrapper = useRef(null);
  // useEffect(() => {
  //   const elements = wrapper.current.children;
  // });

  return (
    <>
      <LandingWrapper data-scroll-section>
        <LandingBackground
          initial={{ x: '-100%' }}
          animate={{ x: ' 0%' }}
          transition={{ ease: 'easeOut', duration: 2 }}
        />
        <LandingWrapperCenter>
          <CarouselWrapper>
            <ImageSlider images={[bath, hall, pool]} />
            <h2>
              <LandingText
                variants={textAnimation}
                initial='initial'
                animate='animate'
              >
                BLABLABLABLA OHMYGOD
              </LandingText>
              <LandingText variants={banner}>TAKE ME TO BLALALALA</LandingText>
              <LandingText>BLABLABAL THE SPA</LandingText>
              <LandingText>BLABLABAL DRATEWKA</LandingText>
            </h2>
          </CarouselWrapper>
        </LandingWrapperCenter>
      </LandingWrapper>
    </>
  );
}
