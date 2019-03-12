import React, { Component } from 'react';

import photo1 from '../assets/images/Foto1.png';
import photo2 from '../assets/images/Foto2.png';
import photo3 from '../assets/images/Foto3.png';
import photo4 from '../assets/images/Foto4.png';
import photo5 from '../assets/images/Foto5.png';
import photo6 from '../assets/images/Foto6.png';
import photo7 from '../assets/images/Foto7.png';
import photo8 from '../assets/images/Foto8.png';
import photo9 from '../assets/images/Foto9.png';
import photo10 from '../assets/images/Foto10.png';
import photo11 from '../assets/images/Foto11.png';


import '../assets/styles/cardinfofigi.css';

class cardinfofigi extends Component {
  render() {
    return (
        <div className="contentinfofigi">     
            <div className="contentelements">
                <img id="imgcardinfo" src={photo1}/>
                <div className="cardinfo">
                    <p>123456</p>                
                </div>
            </div>
            <div className="contentelements2">
                <div className="cardinfo">
                    <p>123456</p>                
                </div>
                <img id="imgcardinfo" src={photo2}/>
            </div>
            <div className="contentelements">
                <img id="imgcardinfo" src={photo3}/>
                <div className="cardinfo">
                    <p>123456</p>                
                </div>
            </div>
            {/* <div className="contentelements2">
                <div className="cardinfo">
                    <p>123456</p>                
                </div>
                <img id="imgcardinfo" src={photo4}/>
            </div> */}
            <div className="contentelements2">
                <div className="cardinfo">
                    <p>lorem ipsum varsum loream natsus galantis</p>                
                </div>
                <img id="imgcardinfo" src={photo5}/>
            </div>
            <div className="contentelements">
                <img id="imgcardinfo" src={photo6}/>
                <div className="cardinfo">
                    <p>123456</p>                
                </div>
            </div>
            <div className="contentelements2">
                <div className="cardinfo">
                    <p>123456</p>                
                </div>
                <img id="imgcardinfo" src={photo7}/>
            </div>
            <div className="contentelements">
                <img id="imgcardinfo" src={photo8}/>
                <div className="cardinfo">
                    <p>123456</p>                
                </div>
            </div>
            <div className="contentelements2">
                <div className="cardinfo">
                    <p>123456</p>                
                </div>
                <img id="imgcardinfo" src={photo9}/>
            </div>
            <div className="contentelements">
                <img id="imgcardinfo" src={photo10}/>
                <div className="cardinfo">
                    <p>123456</p>                
                </div>
            </div>
            <div className="contentelements2">
                <div className="cardinfo">
                    <p>123456</p>                
                </div>
                <img id="imgcardinfo" src={photo11}/>
            </div>
        </div>
    );
  }
}

export default cardinfofigi;