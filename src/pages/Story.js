import React from 'react';
import styled from 'styled-components';
import oils from '../images/oils.webp';
import consumer from '../images/consumer.webp';
import saunaGrey from '../images/sauna-grey.webp';

const StoryContainer = styled.div`
  display: block;
  padding-top: 150px;
  padding-bottom: 150px;
`;
const StoryTitle = styled.h2`
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  font-weight: 500;
  font-size: calc(25px + 39 * ((100vw - 320px) / 1600));
`;
const StoryCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 0 2%;
  width: 100%;
`;
const StoryCard = styled.div`
  width: 24%;
  display: flex;
  flex-direction: column;
`;
const StoryCardNumber = styled.p`
  font-size: 24px;
  padding-bottom: 10px;
  letter-spacing: 1px;
  padding-left: 15px;
`;
const StoryCardImage = styled.div`
  width: 100%;
  height: 300px;

  background-size: cover;
`;
const StoryCardTextWrapper = styled.div`
  padding: 80px 50px 120px;
`;
const StoryCardText = styled.p`
  line-height: 2;
  letter-spacing: 0.5px;
  font-weight: 300;
  font-size: 20px;
`;

const Story = () => {
  return (
    <StoryContainer data-scroll-section>
      <StoryTitle>WHAT WE GOT</StoryTitle>
      <StoryCardWrapper>
        <StoryCard>
          <StoryCardNumber>01</StoryCardNumber>
          <StoryCardImage style={{ backgroundImage: `url(${saunaGrey})` }} />
          <StoryCardTextWrapper>
            <StoryCardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              necessitatibus inventore in velit? Itaque quas explicabo minima
              dolorum, hic dolorem. Itaque quas explicabo minima dolorum, hic
              dolorem. Itaque quas explicabo minima dolorum, hic dolorem.
            </StoryCardText>
          </StoryCardTextWrapper>
        </StoryCard>
        <StoryCard>
          <StoryCardNumber>02</StoryCardNumber>
          <StoryCardImage style={{ backgroundImage: `url(${oils})` }} />
          <StoryCardTextWrapper>
            <StoryCardText>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              necessitatibus inventore in velit? Itaque quas explicabo minima
              dolorum, hic dolorem. Itaque quas explicabo minima dolorum, hic
              dolorem. Itaque quas explicabo minima dolorum, hic dolorem.
            </StoryCardText>
          </StoryCardTextWrapper>
        </StoryCard>
        <StoryCard>
          <StoryCardNumber>03</StoryCardNumber>
          <StoryCardImage style={{ backgroundImage: `url(${consumer})` }} />
          <StoryCardTextWrapper>
            <StoryCardText>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              necessitatibus inventore in velit? Itaque quas explicabo minima
              dolorum, hic dolorem. Itaque quas explicabo minima dolorum, hic
              dolorem. Itaque quas explicabo minima dolorum, hic dolorem.
            </StoryCardText>
          </StoryCardTextWrapper>
        </StoryCard>
      </StoryCardWrapper>
    </StoryContainer>
  );
};

export default Story;
