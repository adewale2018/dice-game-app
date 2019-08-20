import React from 'react';
import RollDice from './RollDice';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1><i className="fas fa-gamepad left"></i>DICE GAME APP<i className="fas fa-gamepad right"></i></h1>
      <RollDice />
    </div>
  );
}

export default App;
