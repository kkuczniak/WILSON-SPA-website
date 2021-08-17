import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 60vh;
  width: 48vw;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  position: relative;
`;

const Slide = styled.div`
  height: 100%;
  width: 100%;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
  transition: 1200ms all ease-in-out;
`;

const DotsWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  bottom: 15px;
  right: 15px;
`;
const Dot = styled.div`
  transition: 1200ms all ease-in-out;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  margin-right: 5px;
  background-color: #fff;
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
`;

const Indicator = ({ currentSlide, amountSlides, slideClick }) => {
  return (
    <DotsWrapper>
      {Array(amountSlides)
        .fill(1)
        .map((_, i) => (
          <Dot
            key={i}
            isActive={currentSlide === i}
            onClick={() => slideClick(i)}
          />
        ))}
    </DotsWrapper>
  );
};

const ImageSlider = ({
  images = [],
  autoPlay = true,
  autoPlayTime = 3500,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide);

  function slideClick(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;

    setCurrentSlide(newSlideIndex);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      slideClick();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <Wrapper {...props}>
      {images.map((image, index) => (
        <Slide
          key={index}
          style={{
            backgroundImage: `url(${image})`,
            marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
          }}
        ></Slide>
      ))}
      <Indicator
        currentSlide={currentSlide}
        amountSlides={images.length}
        slideClick={slideClick}
      />
    </Wrapper>
  );
};

export default ImageSlider;
