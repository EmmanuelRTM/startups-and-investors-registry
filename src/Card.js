import React from 'react';
import './card.css'

//impor imagen from './img/miinag.jpg'-->> importar imagen desde un archivo propio

function Card(props){
    return(
      <div class="card fix">
          <img className="card-img-top" src="https://http.cat/404" alt="Card image cap" />
          <div className="card-body"></div>
            <p className="card-text">
              {props.nombre}
            </p>
      </div>
    )
}

export default Card;
