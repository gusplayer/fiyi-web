import React, { Component } from 'react';
import '../../../assets/styles/trianglesimg.css';
import imgtriangle from "../../../assets/images/Responsive/Fotos 1.png";
import imgtriangle2 from "../../../assets/images/Responsive/Fotos 2.png";

class triangleimgR extends Component {
  render() {
    return (
      <div className="triangleimg">
            <img src={imgtriangle} className="imgtri" alt="fondonube" />
            <img src={imgtriangle2} className="imgtri" alt="fondonube" />
      </div>
    );
  }
}
export default triangleimgR;