import React, { Component } from 'react';
import planeprevideo from '../assets/images/AvioncitoPrevideo.png';

import '../assets/styles/video.css';

class videoplane extends Component {
  render() {
    return (
      <div className="contentvideo">  
            <div className="imgprevideo">
            <img src={planeprevideo} alt="planeprevideo"/> 
            </div>      
             <iframe  title="videofigi" src="https://player.vimeo.com/video/320383446" 
             width="800" height="300" 
             frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
      </div>
    );
  }
}

export default videoplane;