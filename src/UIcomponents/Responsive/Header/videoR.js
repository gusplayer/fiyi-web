import React, { Component } from 'react';
import '../../../assets/styles/video.css';
import nube2video from "../../../assets/images/Responsive/Nube1Video.png";
import nube1video from "../../../assets/images/Responsive/Nube2Video.png";
import nubecitas from "../../../assets/images/Responsive/nubecitasVideo.png";
import acompaname from "../../../assets/images/Responsive/Acompaname.png";
class videoR extends Component {
  render() {
    return (
      <div className="videoR">
          
        <div className="contentvideo">
        <img src={nubecitas} className="nubecitasvideo" alt="nubecitas"/>
            <div className="contentnubes">
                <img src={nube2video} className="nubefrente" alt="nube2"/>
                <img src={nube1video} className="nubeatras" alt="nube1"/>
            </div>
            <div className="imgprevideoR">
            <img src={acompaname} id="acompaname" alt="planeprevideo"/> 
            <iframe className="iframevideo" width="1000" height="600" src="https://www.youtube.com/embed/K4DtfUAx3dI" 
            frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; 
            picture-in-picture" allowFullScreen>
            </iframe>
            </div>      
            
        </div>
      </div>
    );
  }
}
export default videoR;