import React, { Component } from 'react';
import '../../assets/styles/whatis.css';
import lax from 'lax.js'

window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}
class whatis extends Component {
  render() {
    return (
      <div className="Contentwhat">
        <div className="divcontent">
          <h1 className="lax" data-lax-preset="fadeInOut zoomIn 800">
            ¿De QUé Se TRATA FIGI?
          </h1>
          <p>
          La palabra surge de la unión de Físico y Digital…
          FiGi es un novedoso concepto de entretenimiento
          creativo… Bajo un mismo techo se reúnen una
          serie de atracciones interactivas con coloridas
          proyecciones que reaccionan y se transforman
          mediante las acciones y movimientos de los niños.
          </p>  
          <h3>¡Aquí la fantasía se hace realidad!</h3>     
        </div>
      </div>
    );
  }
}
export default whatis;