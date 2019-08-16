import React, { Component } from 'react';

import Card1 from '../../assets/images/Web/Card1.png';
import Card1_1 from '../../assets/images/Web/Card1-1.png';
import Card2 from '../../assets/images/Web/Card2.png';
import Card2_2 from '../../assets/images/Web/Card2-2.png';
import Card3 from '../../assets/images/Web/Card3.png';
import Card3_3 from '../../assets/images/Web/Card3-3.png';
import Card4 from '../../assets/images/Web/Card4.png';
import Card4_4 from '../../assets/images/Web/Card4-4.png';
import Card5 from '../../assets/images/Web/Card5.png';
import Card5_5 from '../../assets/images/Web/Card5-5.png';
import Card6 from '../../assets/images/Web/Card6.png';
import Card6_6 from '../../assets/images/Web/Card6-6.png';
import Card7 from '../../assets/images/Web/Card7.png';
import Card7_7 from '../../assets/images/Web/Card7-7.png';
import Card8 from '../../assets/images/Web/Card8.png';
import Card8_8 from '../../assets/images/Web/Card8-8.png';
import Card9 from '../../assets/images/Web/Card9.png';
import Card9_9 from '../../assets/images/Web/Card9-9.png';
import Card10 from '../../assets/images/Web/Card10.png';
import Card10_10 from '../../assets/images/Web/Card10-10.png';
import Card11 from '../../assets/images/Web/Card11.png';
import Card11_11 from '../../assets/images/Web/Card11-11.png';
import Card12 from '../../assets/images/Web/Card12.png';
import Card12_12 from '../../assets/images/Web/Card12-12.png';
import Card13 from '../../assets/images/Web/Card13.png';
import Card13_13 from '../../assets/images/Web/Card13-13.png';
import Card14 from '../../assets/images/Web/Card14.png';
import Card14_14 from '../../assets/images/Web/Card14-14.png';
import atracciones from '../../assets/images/Web/atracciones.png';

import '../../assets/styles/cardinfofigi.css';
import lax from 'lax.js'

window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}

class cardinfofigi extends Component {
  render() {
    return (
        <div className="contentinfofigi"> 
            <div className="atracciones">
                <img id="imgatracciones" alt="img" src={atracciones}/>
            </div>    
            <div className="contentelements">
                <div>
                    <img id="imgcardinfo" alt="img" src={Card1}/>
                </div>
                <div id="contentinfo">
                    <h1>LANZAMIENTO KIDALKI</h1>
                    <p>¡Nunca ha sido tan divertido luchar contra alienígenas! Las
                        planchas voladoras en la pantalla pueden ser derribadas con bolas
                        reales, lo principal es mantenerse al día y llegar al objetivo.
                    </p>
                </div>
                <img id="imgdecor2"  alt="img" src={Card1_1}/> 
            </div>
            <div className="contentelements2">
                <img id="imgdecor2" alt="img" src={Card2_2}/>
                <div>
                    <h1>DIBUJOS ANIMADOS</h1>
                    <p>Pinta animales sobre una hoja con marcadores, pon tu dibu jo
                        sobre el escáner y - ¡mira como cobra vida! - ¡Tu ilustración
                        aparecerá en la pantalla dentro del mundo mágico esperando
                        para interactuar contigo!
                    </p>
                </div>
                <img id="imgcardinfo" alt="img"  src={Card2}/>
            </div>
            <div className="contentelements">
                <img id="imgcardinfo" alt="img"  src={Card3}/>
                <div>
                    <h1>ROBOT CÚBICO</h1>
                    <p>A los niños de todas las edades les encanta armar figuras
                        con nuestros cubos ya que crean robots con ellos.
                        Asegúrate de encajar los cubos en su lugar correcto para
                        poder conocer amistosos amigos!
                    </p>
                </div>
                <img id="imgdecor2" alt="img" src={Card3_3}/>    
            </div>
            <div className="contentelements2">
                 <img id="imgdecor2" alt="img" src={Card4_4}/>
                 <div>
                    <h1>SALTANDO SOBRE FUEGO</h1>
                    <p>Saltando en un trampolín, lucharás con monstruos de hielo y agua,
                        recogerás estrellas, ganarás puntos y superarás obstáculos para
                        pasar a otro nivel!
                    </p>
                </div>             
                <img id="imgcardinfo" alt="img" src={Card4}/>
            </div>
            <div className="contentelements">
                <img id="imgcardinfo" alt="img" src={Card5}/>
                <div>
                    <h1>GRANDES PISADAS</h1>
                    <p>El piso reacciona a las pisadas, salta y corre sobre él! No olvides
                        pisar las figuras que aparecen y rápidamente desaparecen bajo
                        tus pies.
                    </p>
                </div> 
                <img id="imgdecor2" alt="img"  src={Card5_5}/>               
            </div>
            <div className="Separador">
                
            </div>
            <div className="contentelements2">
                <img id="imgdecor2" alt="img" src={Card6_6}/> 
                <div>
                    <h1>MICROMUNDO</h1>
                    <p>Mueve los objetos sobre la mesa interactiva para ver
                        diferentes organismos evolucionar.
                        ¡Una mente científica puede ayudar a que de una célula
                        crezca una nueva creatura!
                    </p>
                </div>               
                <img id="imgcardinfo" alt="img" src={Card6}/>
            </div>
            <div className="contentelements">
                <img id="imgcardinfo" alt="img" src={Card7}/>
                <div>
                    <h1>¿QUÉ COME LA BALLENA?</h1>
                    <p>¿Cuales tesoros se pueden conseguir en la barriga de una
                        ballena?<br></br>
                        ¡Enciende tu linterna para averiguarlo!
                        Asegúrate de ser el más curioso y rápido para acumular puntos.
                    </p>
                </div> 
                <img id="imgdecor2" alt="img" src={Card7_7}/>                  
            </div>
            <div className="contentelements2">
                <img id="imgdecor2" alt="img" src={Card8_8}/> 
                <div>
                    <h1>SWING TURBO</h1>
                    <p>Balancearse en un columpio para elevarse sobre casas y árboles es
                        el sueño de cualquier niño. En el nuestro puedes alcanzar las
                        estrellas, cometas y agu jeros negros! Colúmpiate más fuerte y
                        atraviesa portales hacia nuevos mundos.
                    </p>
                </div>             
                <img id="imgcardinfo" alt="img" src={Card8}/>
            </div>
            <div className="contentelements">
                <img id="imgcardinfo" alt="img" src={Card9}/>
                <div>
                    <h1>BURBUJA MABLE</h1>
                    <p>Estos personajes en la pantalla siguen cada uno de tus
                        movimientos y hasta reaccionan a tu voz, aunque de una manera
                        diferente!
                        Salta, aplaude e intenta atrapar la mayor cantidad posible de
                        burbu jas cayendo.
                    </p>
                </div> 
                <img id="imgdecor2" alt="img" src={Card9_9}/>                 
            </div>
            <div className="contentelements2">
                <img id="imgdecor2" alt="img" src={Card10_10}/> 
                <div>
                    <h1>EVOLUCIÓN DE LAS ESTRELLAS</h1>
                    <p>¿Alguna vez has soñado con una pista de baile sobre las estrellas?
                        Camina por el piso interactivo y observa bajo tus pies el nacimiento
                        y el crecimiento del planeta y las estrellas.
                    </p>
                </div>     
                <img id="imgcardinfo" alt="img" src={Card10}/>
            </div>
            <div className="contentelements">
                <img id="imgcardinfo" alt="img" src={Card11}/>
                <div>
                    <h1>COLINA FANTÁSTICA</h1>
                    <p>Cuando éramos niños y bajábamos la colina, fantaseámos
                        con que corríamos a lo largo de cascadas y laderas de nieve.
                        Hicimos un rodadero mágico, en el que todos estos sueños
                        de los niños cobran vida.
                    </p>
                </div>
                <img id="imgdecor2" alt="img" src={Card11_11}/>                   
            </div>
            <div className="contentelements2">
                <img id="imgdecor2" alt="img" src={Card12_12}/>
                <div>
                    <h1>FOTOZONA GIGANTE</h1>
                    <p>Una zona de fotos dinámica interactiva en la que se deben
                        completar tareas como estallar burbu jas y atrapar estrellas
                        para poder pasar de ser un enano a un gigante.
                        El sistema toma automáticamente una foto de los participantes
                        dentro del mundo mágico, que luego se puede imprimir.
                    </p>
                </div>                 
                <img id="imgcardinfo" alt="img" src={Card12}/>
            </div>
            <div className="contentelements">
                <img id="imgcardinfo" alt="img" src={Card13}/>
                <div>
                    <h1>ISLA DEL TESORO</h1>
                    <p>Nuestra caja de arena está llena de sorpresas. Cava, construye,
                        crea y encuentra tesoros. ¡Los cofres de piratas, los secretos de
                        los egipcios y los tesoros de los dragones te están esperando!
                    </p>
                </div> 
                <img id="imgdecor2" alt="img" src={Card13_13}/>             
            </div>
            <div className="contentelements2">
                <img id="imgdecor2" alt="img" src={Card14_14}/> 
                <div>
                    <h1>LÁPIZ MÁGICO</h1>
                    <p>Con lápices de gran escala y una proyección interactiva en la
                        pared, los niños se divierten coloreando dentro de un mundo
                        de enormes flores que cambian con el toque.
                    </p>
                </div>            
                <img id="imgcardinfo" alt="img" src={Card14}/>
            </div>
        </div>
    );
  }
}

export default cardinfofigi;