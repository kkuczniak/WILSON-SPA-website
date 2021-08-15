import React from 'react';
import Forms from '../components/Forms';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background: #566351;
  height: 1000px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Forms />
    </FooterContainer>
  );
}
