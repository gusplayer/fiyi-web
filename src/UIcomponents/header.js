import React, { Component } from 'react';
import parquefigi from '../assets/images/NombreEmpresa.png';
import '../assets/styles/header.css';

class header extends Component {
  render() {
    return (
      <div className="Header">
             <img src={parquefigi} className="imagefigi" alt="logo" />
      </div>
    );
  }
}
export default header;