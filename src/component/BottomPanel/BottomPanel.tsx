import React from "react";
import './BottomPanel.css'

import details7 from "../../img/bottom-panel/Untitled-3.png";
import details8 from "../../img/bottom-panel/Untitled-4.png";
import details9 from "../../img/bottom-panel/Untitled-2.png";
import details10 from "../../img/bottom-panel/Untitled-11.png";
import details11 from "../../img/bottom-panel/Untitled-6.png";


function BottomPanel() {
    return (
        <div className="bottom-panel">
            <img src={details7} alt="details7"/>
            <img src={details8} alt="details8"/>
            <img src={details9} alt="details9"/>
            <img src={details10} alt="details10"/>
            <img src={details11} alt="details11"/>
        </div>
    )
}

export default BottomPanel
