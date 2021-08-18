import React , { useState } from 'react';
import './App.scss'

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button style={{color: show && "#DFE0DC", border: show && "2px solid #DFE0DC"}} onClick={() => setShow(!show)}>{show ? 'CLOSE' : 'MENU'}</button>
      <h1 style={{filter: show && "blur(5px)"}}>HELLO WORLD</h1>
      <div className="menu" style={{visibility: show && "visible", opacity: show && "1"}}>
        <p>HOME</p>
        <p>ABOUT</p>
        <p>CONTACT</p>
      </div>
    </div>
  );
}

export default App;
