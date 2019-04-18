import React, { Component } from 'react';
import imgtriangle1 from '../assets/images/Imagenestriangular1.png';
import imgtriangle2 from '../assets/images/Imagenestriangular2.png';
import imgentrete from '../assets/images/Entretenimiento creativo.png';
import '../assets/styles/trianglesimg.css';
import lax from 'lax.js'

window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}
class triangleimage extends Component {
  render() {
    return (
      <div className="contentall">
        <div className="contentimgtext">
          <img src={imgentrete} className="imgtexto" alt="imgentrete"/>
        </div>
        <div className="contentimgs">         
          <img src={imgtriangle1} className="imgtriangle lax" data-lax-preset="fadeInOut" alt="imgtriangle1"/>
          <img src={imgtriangle2} className="imgtriangle lax" data-lax-preset="fadeInOut " alt="imgtriangle2"/>
        </div>
      </div>
    );
  }
}

export default triangleimage;