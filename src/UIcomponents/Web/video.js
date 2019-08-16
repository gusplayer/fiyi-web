import React, { Component } from 'react';
import planeprevideo from '../../assets/images/Web/AvioncitoPrevideo.png';
import '../../assets/styles/video.css';
class videoplane extends Component {
  render() {
    return (
      <div className="contentvideo">  
        <div className="imgprevideo"  >
          <img src={planeprevideo} alt="planeprevideo"/> 
        </div>      
        <iframe className="iframevideo" width="1000" height="600" src="https://www.youtube.com/embed/K4DtfUAx3dI" 
        frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; 
        picture-in-picture" allowFullScreen>
        </iframe>
      </div>
    );
  }
}

export default videoplane;