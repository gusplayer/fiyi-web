import React, { Component } from 'react';
import {header,moon,triangleimage ,whatis,videoplane,ourconcept,
  descriptionfigi,whyfigi,parkfigi,cardinfofigi,listparksfigi,imgend}from "./UIcomponents";
import mainbackground from "./assets/images/FondoPrincipal.png";
import clouds from "./assets/images/Nubes.png";
import clouds2 from "./assets/images/Nubes2.png";
import mountains from "./assets/images/Montañas.png";
import mountainsola from "./assets/images/MontañaSola.png";
import shippaper from "./assets/images/Aguaybarco.png"
// import clouds from './assets/images/clouds.png'
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
class App extends Component {
  render() {
    return (
      <div>
        <div className="mainbackground">
       <img src={mainbackground}></img>
          <div className="clouds">
          <img id="nubes" src={clouds}></img>
            <div className="contentclouds">
              <Header className="Header"></Header>
              <Triangleimage className="Triangle"></Triangleimage>
              <Moon className="Moon"></Moon>
              <Whatis className="Whatis"></Whatis>
            </div>
          </div>
          <div className="clouds2"> 
            <img src={clouds2}></img>
            <Videoplane/>
          </div>
          <div className="mountains">
            <Ourconcept/>
          <img src={mountains}></img>
            <Description/>
          </div>
          <div className="shippaper">
            <Whyfigi/>
            <img src={shippaper}></img>
            <Parkfigi/>
            <Cardinfofigi/>
          <div><h1>BLEBLEBLELB</h1></div>
            <Listparksfigi/>
            <Imgend/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
