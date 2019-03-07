import React, { Component } from 'react';
import planeprevideo from '../assets/images/AvioncitoPrevideo.png';

import '../assets/styles/video.css';

class videoplane extends Component {
  render() {
    return (
      <div className="contentvideo">  
            <div className="imgprevideo">
            <img src={planeprevideo}/> 
            </div>      
             <iframe src="https://player.vimeo.com/video/320383446" 
             width="800" height="300" 
             frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
    );
  }
}

export default videoplane;