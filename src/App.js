import React, { Component } from 'react';
import {header,moon,triangleimage ,whatis,videoplane,ourconcept,
  descriptionfigi,whyfigi,parkfigi,cardinfofigi,listparksfigi,imgend,trend,imageled}from "./UIcomponents";
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
const Trendimg= trend;
const Imageled= imageled;
class App extends Component {
  render() {
    return (
      <div>
        <div className="mainbackground">
        <img src={mainbackground}></img>
            <div className="contentallcomponents">
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
                <Ourconcept/>
              </div>
              <div className="mountains">
                <img src={mountains}></img>
                <div>
                  <img id="montana" src={mountainsola}></img>
                </div>
                <Description/>
                <Whyfigi/>
              </div>
              <div className="shippaper">
                <img src={shippaper}></img>
                <Parkfigi/>
                <Cardinfofigi/>
                <Trendimg/>
                <Listparksfigi/>
                <Imgend/>
                <Imageled/>
              </div>

              </div>
        </div>
      </div>
    );
  }
}

export default App;
