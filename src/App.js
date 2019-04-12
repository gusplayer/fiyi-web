import React, { Component } from 'react';
import {header,moon,triangleimage ,whatis,videoplane,ourconcept,
  descriptionfigi,whyfigi,parkfigi,cardinfofigi,listparksfigi,imgend,trend}from "./UIcomponents";
  import fondopart1 from "./assets/images/FondoPart1.png";
  import fondopart1estrellas from "./assets/images/estrellas.png";
  import fondoazul from "./assets/images/fondoazul.png";
import cloudscapa2 from "./assets/images/NubesCapa2.png";
import cloudscapa1 from "./assets/images/NubesCapa1.png";
import clouds2capa2 from "./assets/images/Nubes2Capa1.png";
import tinycloud from "./assets/images/tinycloud.png";

import clouds3capa1 from "./assets/images/Nubes3Capa1.png";
import clouds3capa2 from "./assets/images/Nubes3Capa2.png";
import clouds3capa3 from "./assets/images/Nubes3Capa3.png";
import montanaback from "./assets/images/montanaback.png";
import montanafront from "./assets/images/montanafront.png";
import shippaper from "./assets/images/Aguaybarco.png"
import './assets/styles/App.css';
const Header= header;
const Moon=moon;
const Triangleimage=triangleimage;
const Whatis=whatis;
const Videoplane=videoplane;
const Ourconcept=ourconcept;
const Description=descriptionfigi;
const Whyfigi=whyfigi;
const Parkfigi=parkfigi;
const Cardinfofigi= cardinfofigi;
const Listparksfigi= listparksfigi;
const Imgend= imgend;
const Trendimg= trend;

//   var container = document.getElementById('containnubes');
//   var windowHeight = window.innerHeight;
//   var windowWidth = window.innerWidth;
//   var scrollArea = 1000 - windowHeight;
//   var nubescapa1 = document.getElementsByClassName('nubescapa1');
//   var nubescapa2 = document.getElementsByClassName('nubescapa2');
//  console.log()
// // update position of square 1 and square 2 when scroll event fires.
//   window.addEventListener('scroll', function() {
//   var scrollTop = window.pageYOffset || window.scrollTop;
//   var scrollPercent = scrollTop/scrollArea || 0;
  
//   nubescapa1.style.left = scrollPercent*window.innerWidth + 'px';
//   nubescapa2.style.left = 100 - scrollPercent*window.innerWidth*0.6 + 'px';
// });

class App extends Component {
  
  render() {
    return (
      <div>
        <div className="mainbackground">
            <div className="contentallcomponents">
            <div className="backgroundpart1">
            <img src={fondopart1}></img>
            <img src={fondopart1estrellas}></img>
              <div className="clouds">
                <div id="containnubes1">
                  <img className="nubescapa2" src={cloudscapa2}></img>
                  <img className="nubescapa1" src={cloudscapa1}></img>
                </div>
                <div className="contentclouds">
                  <Header className="Header"></Header>
                  <Triangleimage className="Triangle"></Triangleimage>
                  <Moon className="Moon"></Moon>
                  <Whatis className="Whatis"></Whatis>
                </div>
              </div>
              <div className="clouds2"> 
                <div>
                  <div className="tinyclouds">
                    <div><img src={tinycloud}></img></div>
                  </div>
                  <div id="containnubes2">
                    <img src={clouds2capa2}></img>
                  </div>
                </div>
                <div className="contentclouds2">
                  <Videoplane/>
                  <Ourconcept/>
                </div>
              </div>
            </div>
              
            <div className="mountains">
              <div id="containnubes3">
                <div id="montanaback" ><img  src={montanaback}></img></div>
                <div><img  id="nubes3capa3" src={clouds3capa3}></img></div>
                <div ><img id="nubes3capa2" src={clouds3capa2}></img></div>
                <div id="montanafront"><img src={montanafront}></img></div>
                <div ><img id="nubes3capa1" src={clouds3capa1}></img></div>
              </div>
              
              <div className="contentclouds3">
              <img src={fondoazul}></img>
                <Description/>
                <Whyfigi/>
              </div>                
            </div>
              <div className="shippaper">
                <img src={shippaper}></img>
                <Parkfigi/>
                <Cardinfofigi/>
                <Trendimg/>
                <Listparksfigi/>
                <Imgend/>
              </div>
              </div>
        </div>
      </div>
    );
  }
}

export default App;
