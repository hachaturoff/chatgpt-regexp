import React from "react";
import './MainPanel.css'
import detail1 from '../../img/main-panel/Layer 26.png'
import detail2 from '../../img/main-panel/Untitled-9.png'
function MainPanel() {
    return (
        <div className="main-panel">
           <div className="wrapper-monitor">
               <div id='div1'></div>
               <div id='div2'></div>
               <div id='div3'></div>
           </div>

            <div id="wrapper-input">
                <img src={detail1} alt="detail1"/>
                <img src={detail2} alt="detail2"/>
                <div id='div4'> HI MANU</div>
            </div>


        </div>
    )
}

export default MainPanel