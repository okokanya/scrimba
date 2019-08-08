import React from 'react';
import './App.css';
import itsme from './img/itsme.jpg';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';



function App() {
  return (
    <div>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
