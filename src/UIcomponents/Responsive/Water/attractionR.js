import React, { Component } from 'react';
import '../../../assets/styles/water.css';
import marfondo0 from "../../../assets/images/Responsive/watercapa1.png";
import atracciones from "../../../assets/images/Responsive/atracciones.png"
import foto1 from "../../../assets/images/Responsive/foto1.png";
import foto2 from "../../../assets/images/Responsive/foto2.png";
import foto3 from "../../../assets/images/Responsive/foto3.png";
import foto4 from "../../../assets/images/Responsive/foto4.png";
import foto5 from "../../../assets/images/Responsive/foto5.png";
import foto6 from "../../../assets/images/Responsive/foto6.png";
import foto7 from "../../../assets/images/Responsive/foto7.png";
import foto8 from "../../../assets/images/Responsive/foto8.png";
import foto9 from "../../../assets/images/Responsive/foto9.png";
import foto10 from "../../../assets/images/Responsive/foto10.png";
import foto11 from "../../../assets/images/Responsive/foto11.png";
import foto12 from "../../../assets/images/Responsive/foto12.png";
import foto13 from "../../../assets/images/Responsive/foto13.png";
import foto14 from "../../../assets/images/Responsive/foto14.png";

import icono1 from "../../../assets/images/Responsive/icono 1_lanzamiento.png";
import icono2 from "../../../assets/images/Responsive/icono 2_dibujos.png";
import icono3 from "../../../assets/images/Responsive/icono 3_robot.png";
import icono4 from "../../../assets/images/Responsive/icono 6_saltando_sobre_fuego (1).png";
import icono5 from "../../../assets/images/Responsive/icono 4_grandes.png";
import icono6 from "../../../assets/images/Responsive/icono 5_micromundo.png";
import icono7 from "../../../assets/images/Responsive/icono 6_que come la ballena.png";
import icono8 from "../../../assets/images/Responsive/icono 7_swin.png";
import icono9 from "../../../assets/images/Responsive/icono 8_burbuja.png";
import icono10 from "../../../assets/images/Responsive/icono 9_evolucion.png";
import icono11 from "../../../assets/images/Responsive/icono 10_colina.png";
import icono12 from "../../../assets/images/Responsive/icono 11_fotozona.png";
import icono13 from "../../../assets/images/Responsive/icono 12_isla del tesoro.png";
import icono14 from "../../../assets/images/Responsive/icono 13_lapiz.png";


class attractionR extends Component {
  render() {
    return (
      <div>
        <div className="atracciones">
          <img src={atracciones} className="atraccionesimg lax" data-lax-preset="fadeInOut"  alt="atracciones" />
        <div className="cardatraccion">
          <div>
            <img src={foto1} className="fotos" alt="fotos" />
          </div>
          <div className="textatr">
            <h2>LANZAMIENTO KIDALKI</h2>
            <p>¡Nunca ha sido tan divertido luchar
                contra alienígenas! Las planchas
                voladoras en la pantalla pueden ser
                derribadas con bolas reales, lo
                principal es mantenerse al día y
                llegar al objetivo.
              </p>
            <div className="contenticonos" >
              <img src={icono1} className="iconos" alt="iconos" />
            </div>
          </div>
        </div>
        <div className="cardatraccion">
          <div>
            <img src={foto2} className="fotos" alt="fotos" />
          </div>
          <div className="textatr">
            <h2>DIBUJOS ANIMADOS</h2>
            <p>Pinta animales sobre una hoja con
                marcadores, pon tu dibujo sobre el
                escáner y - ¡mira como cobra vida! -
                ¡Tu ilustración aparecerá en la pantalla
                dentro del mundo mágico esperando
                para interactuar contigo!
              </p>
            <div className="contenticonos" >
              <img src={icono2} className="iconos" alt="iconos" />
            </div>
          </div>
        </div>
        <div className="cardatraccion">
          <div>
            <img src={foto3} className="fotos" alt="fotos" />
          </div>
          <div className="textatr">
            <h2>ROBOT CÚBICO</h2>
            <p>A los niños de todas las edades les
              encanta armar figuras con nuestros
              cubos ya que crean robots con ellos.
              Asegúrate de encajar los cubos en su
              lugar correcto para poder conocer
              amistosos amigos!
              </p>
            <div className="contenticonos" >
              <img src={icono3} className="iconos" alt="iconos" />
            </div>
          </div>
        </div>
        <div className="cardatraccion">
          <div>
            <img src={foto4} className="fotos" alt="fotos" />
          </div>
          <div className="textatr">
            <h2>SALTANDO SOBRE FUEGO</h2>
            <p>Saltando en un trampolín, lucharás con
                monstruos de hielo y agua, recogerás
                estrellas, ganarás puntos y superarás
                obstáculos para pasar a otro nivel!
              </p>
            <div className="contenticonos" >
              <img src={icono4} className="iconos" alt="iconos" />
            </div>
          </div>
        </div>
        <div className="cardatraccion">
          <div>
            <img src={foto5} className="fotos" alt="fotos" />
          </div>
          <div className="textatr">
            <h2>GRANDES PISADAS</h2>
            <p>El piso reacciona a las pisadas, salta y
                corre sobre él! No olvides pisar las
                figuras que aparecen y rápidamente
                desaparecen bajo tus pies.
              </p>
            <div className="contenticonos" >
              <img src={icono5} className="iconos" alt="iconos" />
            </div>
          </div>
        </div>
        <div className="cardatraccion">
          <div>
            <img src={foto6} className="fotos" alt="fotos" />
          </div>
          <div className="textatr">
            <h2>MICROMUNDO</h2>
            <p>Mueve los objetos sobre la mesa
                interactiva para ver diferentes
                organismos evolucionar.
                ¡Una mente científica puede ayudar a
                que de una célula crezca una nueva
                creatura!
              </p>
            <div className="contenticonos" >
              <img src={icono6} className="iconos" alt="iconos" />
            </div>
          </div>
        </div>
        </div>
        <div className="contentwater3">
          <img src={marfondo0} className="marfondo0" alt="fondo" />
        </div>
        <div className="atracciones">
        <div className="cardatraccion">
          <div>
            <img src={foto7} className="fotos" alt="fotos" />
          </div>
          <div className="textatr">
            <h2>¿QUÉ COME LA BALLENA?</h2>
            <p>¿Cuales tesoros se pueden conseguir
                en la barriga de una ballena?
                ¡Enciende tu linterna para averiguarlo!
                Asegúrate de ser el más curioso y
                rápido para acumular puntos.
              </p>
            <div className="contenticonos" >
              <img src={icono7} className="iconos" alt="iconos" />
            </div>
          </div>
        </div>
        <div className="cardatraccion">
          <div>
            <img src={foto8} className="fotos" alt="fotos" />
          </div>
          <div className="textatr">
            <h2>SWING TURBO</h2>
            <p>Balancearse en un columpio para
                elevarse sobre casas y árboles es el
                sueño de cualquier niño. En el nuestro
                puedes alcanzar las estrellas, cometas
                y agu jeros negros! Colúmpiate más
                fuerte y atraviesa portales hacia
                nuevos mundos.
              </p>
            <div className="contenticonos" >
              <img src={icono8} className="iconos" alt="iconos" />
            </div>
          </div>
        </div>
        <div className="cardatraccion">
          <div>
            <img src={foto9} className="fotos" alt="fotos" />
          </div>
          <div className="textatr">
            <h2>BURBUJA MALEABLE</h2>
            <p>Estos personajes en la pantalla siguen
              cada uno de tus movimientos y hasta
              reaccionan a tu voz, aunque de una
              manera diferente!
              Salta, aplaude e intenta atrapar la
              mayor cantidad posible de burbu jas
              cayendo.
              </p>
            <div className="contenticonos" >
              <img src={icono9} className="iconos" alt="iconos" />
            </div>
          </div>
        </div>
        <div className="cardatraccion">
          <div>
            <img src={foto10} className="fotos" alt="fotos" />
          </div>
          <div className="textatr">
            <h2>EVOLUCIÓN DE LAS ESTRELLAS</h2>
            <p>¿Alguna vez has soñado con una pista
                de baile sobre las estrellas?
                Camina por el piso interactivo y observa
                bajo tus pies el nacimiento y el
                crecimiento del planeta y las estrellas.
              </p>
            <div className="contenticonos" >
              <img src={icono10} className="iconos" alt="iconos" />
            </div>
          </div>
        </div>
        <div className="cardatraccion">
          <div>
            <img src={foto11} className="fotos" alt="fotos" />
          </div>
          <div className="textatr">
            <h2>COLINA FANTÁSTICA</h2>
            <p>Cuando éramos niños y bajábamos la
              colina, fantaseámos con que corríamos
              a lo largo de cascadas y laderas de
              nieve. Hicimos un rodadero mágico, en el
              que todos estos sueños de los niños
              cobran vida.
              </p>
            <div className="contenticonos" >
              <img src={icono11} className="iconos" alt="iconos" />
            </div>
          </div>
        </div>
        <div className="cardatraccion">
          <div>
            <img src={foto12} className="fotos" alt="fotos" />
          </div>
          <div className="textatr">
            <h2>FOTOZONA GIGANTE</h2>
            <p>Una zona de fotos dinámica interactiva
              en la que se deben completar tareas
              como estallar burbu jas y atrapar
              estrellas para poder pasar de ser un
              enano a un gigante.
              El sistema toma automáticamente una
              foto de los participantes dentro del
              mundo mágico, que luego se puede
              imprimir.
              </p>
            <div className="contenticonos" >
              <img src={icono12} className="iconos" alt="iconos" />
            </div>
          </div>
        </div>
        <div className="cardatraccion">
          <div>
            <img src={foto13} className="fotos" alt="fotos" />
          </div>
          <div className="textatr">
            <h2>ISLA DEL TESORO</h2>
            <p>Nuestra caja de arena está llena de
              sorpresas. Cava, construye, crea y
              encuentra tesoros. ¡Los cofres de
              piratas, los secretos de los egipcios y los
              tesoros de los dragones te están
              esperando!
              </p>
            <div className="contenticonos" >
              <img src={icono13} className="iconos" alt="iconos" />
            </div>
          </div>
        </div>
        <div className="cardatraccion">
          <div>
            <img src={foto14} className="fotos" alt="fotos" />
          </div>
          <div className="textatr">
            <h2>LÁPIZ MÁGICO</h2>
            <p>Con lápices de gran escala y una
              proyección interactiva en la pared, los
              niños se divierten coloreando dentro de
              un mundo de enormes flores que
              cambian con el toque.
              </p>
            <div className="contenticonos" >
              <img src={icono14} className="iconos" alt="iconos" />
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
export default attractionR;