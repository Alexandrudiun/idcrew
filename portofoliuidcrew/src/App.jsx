import React from 'react';
import HomePage from './components/HomePage';
import PreLoader from './components/preloader/PreLoader';
import '../src/style.css';
import Navbar from './components/navbar/Navbar';
import Services from './components/Services/Services';
import Hero from './components/hero/Hero';
import HorizontalScroll from 'react-scroll-horizontal';

function App() {
  const childStyle = { width: '100vw', height: '100%' };

  return (
    <div className="app">
      <HorizontalScroll>
        <div style={childStyle} className="main bg">
          <Navbar />
          <Hero />
        </div>
        <div style={childStyle} className="main bg1">
          <Services />
        </div>
      </HorizontalScroll>
      <PreLoader />
    </div>
  );
}

export default App;
