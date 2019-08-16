import React, { Component } from 'react';
import '../../../assets/styles/trianglesimg.css';
import imgtriangle from "../../../assets/images/Web/Imagenestriangular1.png";

class triangleimgR extends Component {
  render() {
    return (
      <div className="triangleimg">
            <img src={imgtriangle} className="imgtri" alt="fondonube" />
      </div>
    );
  }
}
export default triangleimgR;