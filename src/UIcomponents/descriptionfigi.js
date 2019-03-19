import React, { Component } from 'react';
import logofigi from '../assets/images/NombreEmpresaPequeña.png';
import imgdescriptionfigi from '../assets/images/DescripcionFigi.png';
import '../assets/styles/descriptionfigi.css';

class descriptionfigi extends Component {
  render() {
    return (
      <div className="contentdescription">    
        <div className="conceptimgsdescription">
          <img id="imgdescrip" src={logofigi} alt="logofigi"/>
        </div>    
        <div className="concepttextdescription">
          <p>
            ¡Mucho mas que solo diversión!... Los espacios han sido
            cuidadosamente planeados y diseñados para estimular el
            desarrollo de habilidades como velocidad de reacción,
            motricidad fina, lógica, fantasía creativa, comunicación,
            arte y por supuesto, la imaginación!
          </p>
          <p>
            Usando únicamente sus cuerpos, los niños pueden alterar
            el mundo digital que los rodea. No hay necesidad de ningún
            dispositivo especial! Solo usamos luz y proyeccion, es una
            experiencia completamente segura para los niños.
          </p>
          <p>
            Wow ¡Aquí todo cobra vida! ¡Están dentro de la caricatura!
          </p>
          {/* <img id="imgdescrip" src={imgdescriptionfigi} alt="imgdescriptionfigi"/> */}
        </div> 
      </div>
    );
  }
}

export default descriptionfigi;