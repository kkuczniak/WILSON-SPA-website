import * as React from 'react';
import Header from '../components/Header';
import Footer from './Footer';

// styles
const pageStyles = {
  color: '#a123f5',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Header />
      <Footer />
    </main>
  );
};

export default IndexPage;
