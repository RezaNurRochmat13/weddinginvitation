import React from 'react';
import './commoncss/bootstrap.css';
import './commoncss/font-icon.css';
import './App.css';
import Header from './components/Header';
import WeadingDate from './components/WeadingDate';
import CountDown from './components/CountDown';
import WeadingDetails from './components/WeadingDetails2';
import Invitation from './components/Invitation';
import Weadingloaction from './components/Weadingloaction'
import Contact from './components/Contact';
import gending from './audio/gending.mp3';

function App() {
  // const audio = new Audio(gending);
  // if(typeof audio.loop === 'boolean') {
  //   audio.loop = true
  // } else {
  //   audio.addEventListener('ended', function() {
  //     this.currentTime = 0;
  //     this.play();
  //   }, false);
  // }
  // audio.play();
  return (
    <div className="App">
     <Header />
     <WeadingDate />
     <CountDown />
     <Invitation />
     <Weadingloaction />
     <WeadingDetails />
     <Contact />
    </div>
  );
}

export default App;
