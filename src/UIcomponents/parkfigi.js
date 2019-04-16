import React, { Component } from 'react';
import parkfigiimg from '../assets/images/elparque.png';
import img14parque from '../assets/images/14parque.png';
import '../assets/styles/parkfigi.css';

class parkfigi extends Component {
  render() {
    return (
      <div className="contentpark"> 
        <img  id="imgpark2" src={img14parque} alt="imgdescriptionfigi"/>
        <img  id="imgpark" src={parkfigiimg} alt="imgdescriptionfigi"/>
      </div>
    );
  }
}

export default parkfigi;