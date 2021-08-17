import * as React from 'react';
import Header from '../components/Header';
import BackgroundLines from '../components/BackgroundLines';
import Landing from './Landing';

import Footer from './Footer';
import './style.css';

// styles
const pageStyles = {
  boxSizing: 'borderBox',
  height: '100%',
  padding: '0',
  margin: '0',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <BackgroundLines />
      <Header />
      <Landing />

      <Footer />
    </main>
  );
};

export default IndexPage;
