import React, { Component } from 'react';
import {header,moon,triangleimage ,whatis}from "./UIcomponents";
// import clouds from './assets/images/clouds.png'
import './assets/styles/App.css';
const Header= header;
const Moon=moon;
const Triangleimage=triangleimage;
const Whatis=whatis;

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="mainbackground">
          <div className="clouds">
            <div className="contentclouds">
              <Header className="Header"></Header>
              <Triangleimage className="Triangle"></Triangleimage>
              <Moon className="Moon"></Moon>
              <Whatis className="Whatis"></Whatis>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
