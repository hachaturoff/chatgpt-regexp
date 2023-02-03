import React from 'react';
import './Decoder.css';
import Frame from "./img/Frame1.png"
import RightPanel from "./component/RightPanel/RightPanel";
import BottomPanel from "./component/BottomPanel/BottomPanel";
import MainPanel from "./component/MainPanel/MainPanel";

function Decoder() {
  return (
    <div className="Decoder">
      <img className="Decoder-mainpanel" src={Frame} alt="Frame"/>
      <div className="wrapper">
          <MainPanel/>

          <RightPanel/>
          <BottomPanel/>
      </div>
    </div>
  );
}

export default Decoder;
