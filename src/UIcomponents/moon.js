import React, { Component } from 'react';
import moonimg from '../assets/images/Luna.png';
import rocketimg from '../assets/images/CoheteLuna.png';
import '../assets/styles/moon.css';

class moon extends Component {
  render() {
    return (
      <div className="Moon">
            {/* <img src={rocketimg} className="imagerocket" alt="logo" /> */}
            <img src={moonimg} className="imagemoon" alt="logo" />
      </div>
    );
  }
}

export default moon;