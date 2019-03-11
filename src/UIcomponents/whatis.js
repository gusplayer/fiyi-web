import React, { Component } from 'react';
import dequesetrata from '../assets/images/Dequesetrata.png';
import '../assets/styles/whatis.css';

class whatis extends Component {
  render() {
    return (
      <div className="Contentwhat">
        <img src={dequesetrata} className="imagedescription" alt="logo" />
      </div>
    );
  }
}
export default whatis;