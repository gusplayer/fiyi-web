import React, { Component } from 'react';
import moonimg from '../assets/images/Luna.png';
import rocketimg from '../assets/images/CoheteLuna.png';
import '../assets/styles/moon.css';
import lax from 'lax.js'
window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}
class moon extends Component {
  render() {
    return (
      <div className="Moon">
        <img src={rocketimg} className="lax" data-lax-translate-y="0 50, 300 -200, 400 -400" id="imagerocket" alt="logo" /> 
        <img src={moonimg} id="imgmoon" className="imagemoon" alt="logo" />
      </div>
    );
  }
}

export default moon;