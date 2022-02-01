import React from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.svg';

const HeaderStyled = styled.header`
  width: 420px;
  position: fixed;
  z-index: 100;
  padding-top: 30px;
  padding-left: 30px;
  display: block;
  height: 35px;
  object-fit: cover;
`;
const imgStyle = {
  objectFit: 'contain',
  width: '300px',
};

export default function Header() {
  return (
    <HeaderStyled>
      <img style={imgStyle} src={Logo} alt='' />
    </HeaderStyled>
  );
}
