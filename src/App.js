import React, { Component,Suspense,lazy } from 'react';

import {
  //Web
  header,
  moon,
  triangleimage,
  whatis,
  videoplane,
  ourconcept,
  descriptionfigi,
  whyfigi,
  parkfigi,
  cardinfofigi,
  listparksfigi,
  imgend,
  trend,
  //Responsive
  headerR,
  heavenR,
  waterR
  }from "./UIcomponents";
  
import lax from 'lax.js'
import fondopart1 from "./assets/images/Web/FondoPart1.png";
import fondopart1estrellas from "./assets/images/Web/estrellas.png";
import fondoazul from "./assets/images/Web/fondoazul.png";
import cloudscapa2 from "./assets/images/Web/NubesCapa2.png";
import cloudscapa1 from "./assets/images/Web/NubesCapa1.png";
import clouds2capa1 from "./assets/images/Web/Nubes2Capa1.png";
import clouds2capa2 from "./assets/images/Web/Nubes2Capa2.png";
import tinycloud from "./assets/images/Web/tinycloud.png";

import clouds3capa1 from "./assets/images/Web/Nubes3Capa1.png";
import clouds3capa2 from "./assets/images/Web/Nubes3Capa2.png";
import clouds3capa3 from "./assets/images/Web/Nubes3Capa3.png";
import montanaback from "./assets/images/Web/montanaback.png";
import montanafront from "./assets/images/Web/montanafront.png";

import hills from "./assets/images/Web/hills.png"
import arena from "./assets/images/Web/arena.png"
import shipwater from "./assets/images/Web/shipwater.png"

import watercapa1 from "./assets/images/Web/watercapa1.png"
import watercapa2 from "./assets/images/Web/watercapa2.png"
import watercapa3 from "./assets/images/Web/watercapa3.png"
import watercapa4 from "./assets/images/Web/watercapa4.png"
import deep from "./assets/images/Web/deep.png"
import './assets/styles/App.css';
const WaterR = React.lazy(() => import('./UIcomponents/Responsive/Water/waterR'));
//Web
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
//Responsive
const HeaderR=headerR;
const HeavenR=heavenR;
// const WaterR = waterR; 


window.onload = function() {
	lax.setup() // init
	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}
class App extends Component {
  render() {
    return (
      <div>
      <div className="Web">
        <div className="mainbackground">
            <div className="contentallcomponents">
              <div className="backgroundpart1">
                <img id="fondopart1" src={fondopart1}></img>
                <img src={fondopart1estrellas}></img>
                  <div className="clouds">
                    <div id="containnubes1">
                      <img  id="nubescapa2" className="lax" data-lax-translate-y="0 30,500 200 speed=0.5" src={cloudscapa2}></img>
                      <img id="nubescapa1" className="nubescapa1 lax" data-lax-translate-y= "0 50,300 150 speed=0.5" src={cloudscapa1}></img>
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
                        <div><img className="lax" data-lax-preset="fadeInOut" src={tinycloud}></img></div>
                      </div>
                      <div id="containnubes2">
                        <img id="nubes2capa2" className="lax"  data-lax-translate-y="500 200,500 100 | loop=1000 speed=0.5 " src={clouds2capa2}></img>
                        <img id="nubes2capa1" className="lax" data-lax-translate-y="500 150,500 120 | loop=1000 speed=0.5" src={clouds2capa1}></img>
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
                  <div id="montanaback"  ><img  src={montanaback}></img></div>
                  <div><img  id="nubes3capa3"  className="lax" data-lax-preset="driftLeft | speed=0.5 " src={clouds3capa3}></img></div>
                  <div ><img id="nubes3capa2"  src={clouds3capa2}></img></div>
                  <div id="montanafront"><img src={montanafront}></img></div>
                  <div ><img id="nubes3capa1" className="lax" data-lax-preset="driftRight | speed=0.5"  src={clouds3capa1}></img></div>
                </div>
                <div className="contentclouds3">
                  <img className="fondoazul" src={fondoazul}></img>
                  <img  id="colinas" src={hills}></img>
                  <Description/>
                  <Whyfigi/>
                </div>                
              </div>
              <div className="shippaper">
                <div className="containhill">
                  <img className="arena" src={arena}></img>
                  <img  className="shipwater"src={shipwater}></img>
                  <img id="watercapa4" className="lax" data-lax-preset="driftLeft" src={watercapa4}></img>
                  <img id="watercapa3" className="lax" data-lax-preset="driftRight" src={watercapa3}></img>
                  <img id="watercapa2" src={watercapa2}></img>
                  <img id="watercapa1" src={watercapa1}></img>
                </div>
                <div className="contentshippaper">
                  <div className="containdeep">
                  
                  <img id="deep" src={deep}></img>
                  <img id="watercapaoculta" src={watercapa1}></img>
                  </div>
                  <Parkfigi/>
                  <Cardinfofigi/>
                  <Listparksfigi/>
                  <Trendimg/>
                  <Imgend/>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="Responsive">
        <HeaderR/>
        <HeavenR/>
        <Suspense  fallback={<div>Loading...</div>}>
        <WaterR/>
        </Suspense>
        
          
      
        
      </div>
      </div>
    );
  }
}

export default App;
