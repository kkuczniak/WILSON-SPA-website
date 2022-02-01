import React from 'react';
import styled from 'styled-components';
import ceo from '../images/ceo.webp';

const CeoContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 200px;
  width: 100%;
  min-height: 110vh;
  display: flex;
  flex-wrap: nowrap;
`;
const CeoWrapperLeft = styled.div`
  width: 55%;
  background: #566351;
  position: relative;
  display: flex;
  @media screen and (max-width: 768px) {
    width: 25%;
  }
`;
const CeoTextWrapper = styled.div`
  width: 30%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
const CeoTextLeft = styled.span`
  white-space: nowrap;
  transform: rotate(-90deg);
  transform-origin: 50%, 50%;
  color: white;
  font-size: 16px;
  text-transform: uppercase;
`;
const CeoImageLeft = styled.div`
  width: 70%;
  height: 100%;
  position: absolute;
  right: 0;
  padding-left: 15px;
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const CeoWrapperRight = styled.div`
  width: 45%;
  padding: 200px 10% 100px 5%;
  @media screen and (max-width: 768px) {
    width: 75%;
    padding: 20px 5% 50px 5%;
  }
`;
const CeoTitle = styled.h2`
  font-size: calc(14px + 23 * ((100vw - 320px) / 1600));
  margin-bottom: 80px;
`;
const CeoTextRight = styled.p`
  font-size: 24px;
  letter-spacing: 2px;
  line-height: 2.5;
`;
export default function CeoArticle() {
  return (
    <CeoContainer data-scroll-section>
      <CeoWrapperLeft>
        <CeoTextWrapper>
          <CeoTextLeft>
            Your ability to generate power is directly proportional to your
            ability to relax
          </CeoTextLeft>
        </CeoTextWrapper>
        <CeoImageLeft style={{ backgroundImage: `url(${ceo})` }} />
      </CeoWrapperLeft>
      <CeoWrapperRight>
        <CeoTitle>
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
        </CeoTitle>
        <CeoTextRight>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ratione
          distinctio obcaecati velit voluptatum tempora consequuntur porro
          laudantium odio, rerum eaque molestiae molestias, optio aliquid.
        </CeoTextRight>
      </CeoWrapperRight>
    </CeoContainer>
  );
}
