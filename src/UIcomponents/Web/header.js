import React, { Component } from 'react';
import parquefigi from '../../assets/images/Web/NombreEmpresa.png';
import innovacion from '../../assets/images/Web/innovacionydiver.png';
import '../../assets/styles/header.css';

class header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={innovacion} className="imagefigi" alt="logo" />
        <img src={parquefigi} className="imagefigi" alt="logo" />
      </div>
    );
  }
}
export default header;