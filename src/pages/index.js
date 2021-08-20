import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import BackgroundLines from '../components/BackgroundLines';
import Landing from './Landing';
import Story from './Story';
import Loader from './Loader';
import CeoArticle from './CeoArticle';
import '@fontsource/playfair-display';
import Footer from './Footer';
import { motion } from 'framer-motion';
import './style.css';

// styles
const pageStyles = {
  boxSizing: 'borderBox',
  height: '100%',
  padding: '0',
  margin: '0',
  // fontFamily: '-apple-system, Roboto, sans-serif, serif',
  fontFamily: 'Playfair Display',
};

// markup
const IndexPage = () => {
  const [preloader, setPreloader] = useState(true);

  const [timer, setTimer] = useState(3);
  const id = useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <>
      {preloader ? (
        <Loader />
      ) : (
        <main
          className='main-container'
          id='main-container'
          data-scroll-container
          style={pageStyles}
        >
          <BackgroundLines />
          <Header />
          <Landing />
          <Story />
          <CeoArticle />
          <Footer />
        </main>
      )}
    </>
  );
};

export default IndexPage;
