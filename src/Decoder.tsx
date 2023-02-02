import React from 'react';
import './Decoder.css';
import Frame from "./img/Frame1.png"

function Decoder() {
  return (
    <div className="Decoder">
      <img src={Frame} alt="Frame"/>
      <div className="right-panel"></div>
    </div>
  );
}

export default Decoder;
