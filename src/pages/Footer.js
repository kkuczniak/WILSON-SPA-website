import React from 'react';
import Forms from '../components/Forms';
import styled from 'styled-components';

const FooterContainer = styled.div`
  margin: 100px 100px 0;
  padding-bottom: 50px;
  background: #566351;
  height: 90vh;
  position: relative;
  display: flex;
  @media screen and (max-width: 768px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    height: 150%;
  }
`;
const FormsContainer = styled.div`
  width: 40%;
  position: absolute;
  right: 20px;
  bottom: 50px;
  h4 {
    font-size: 28px;
    color: white;
    padding-left: 25px;
  }
  @media screen and (max-width: 768px) {
    position: static;
    width: 100%;
    height: 50%;
  }
`;
const FooterTextLeft = styled.div`
  position: absolute;
  left: 10%;
  top: 30%;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  h4 {
    font-size: 28px;
    margin-bottom: 50px;
  }
  p {
    font-size: 28px;
  }
  a {
    padding-top: 15px;
    width: 400px;
    display: flex;
    text-decoration: none;
    color: white;
  }
  @media screen and (max-width: 768px) {
    position: static;
    margin: 30px;
    height: 50%;
    h4 {
      font-size: 22px;
    }
    a {
      padding-top: 50px;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer data-scroll-section>
      <FooterTextLeft>
        <h4>Lorem ipsum dolor sit</h4>
        <p>+48 222 222 222</p>
        <p>+48 111 111 111</p>
        <a href='https://www.facebook.com'>facebook</a>
        <a href='https://www.instagram.com'>instagram</a>
      </FooterTextLeft>
      <FormsContainer>
        <h4>Contact Us</h4>
        <Forms />
      </FormsContainer>
    </FooterContainer>
  );
}
