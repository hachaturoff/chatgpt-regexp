import React from "react";
import './RightPanel.css'

import details1 from "../../img/right-panel/Layer 21.png";
import details2 from "../../img/right-panel/Vector.png";
import details3 from "../../img/right-panel/Untitled-8.png";
import details4 from "../../img/right-panel/Layer 19.png";
import details5 from "../../img/right-panel/Untitled-1.png";
import details6 from "../../img/right-panel/Untitled-12.png";


function RightPanel() {


    return(
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
    )
}

export default RightPanel