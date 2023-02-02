import React from 'react';
import './Decoder.css';
import Frame from "./img/Frame1.png"
import details1 from "./img/right-panel/Layer 21.png"
import details2 from "./img/right-panel/Vector.png"
import details3 from "./img/right-panel/Untitled-8.png"
import details4 from "./img/right-panel/Layer 19.png"
import details5 from "./img/right-panel/Untitled-1.png"
import details6 from "./img/right-panel/Untitled-12.png"

import details7 from "./img/bottom-panel/Untitled-3.png"
import details8 from "./img/bottom-panel/Untitled-4.png"
import details9 from "./img/bottom-panel/Untitled-2.png"
import details10 from "./img/bottom-panel/Untitled-11.png"
import details11 from "./img/bottom-panel/Untitled-6.png"

function Decoder() {
  return (
    <div className="Decoder">
      <img className="Decoder-mainpanel" src={Frame} alt="Frame"/>
      <div className="wrapper">
          <div className="left-panel"></div>

          <div className="right-panel">
              <img src={details1} alt="details1"/>
              <div>
                  <img src={details2} alt="details2"/>
                  <img src={details3} alt="details3"/>
              </div>
              <img src={details4} alt="details4"/>
              <img src={details5} alt="details4"/>
              <div>
                  <img src={details6} alt="details5"/>
                  <img src={details2} alt="details5"/>
                  <img src={details2} alt="details5"/>
              </div>
          </div>
          <div className="bottom-panel">
              <img src={details7} alt="details7"/>
              <img src={details8} alt="details8"/>
              <img src={details9} alt="details9"/>
              <img src={details10} alt="details10"/>
              <img src={details11} alt="details11"/>
          </div>
      </div>

    </div>
  );
}

export default Decoder;
