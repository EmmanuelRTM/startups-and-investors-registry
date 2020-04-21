import React from 'react';
import './card.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Card2(props) {
  return (
    <div className=''>
             <div class="jumbotron jumbotron-fluid jumbotron">
            <div class="container">
            <h1 class="display-4">¡Bienvenido!</h1>
            <br/>
            <br/>
            <p class="lead">Invierte en los mejores start-ups de México.</p>
            <p>Todos nuestros proyectos estan verificados. </p>
            </div>
            </div>
        <div className='card fix panda' >
            <label className='label'><strong>Tacos de Armando</strong></label>
            <img className="card-img-top" src="https://d1ralsognjng37.cloudfront.net/e98005ff-9887-420d-a918-cffc420b7df1" alt="Card image cap"/>
            <div className="card-body">
            <p className="card-text"> Los mejores tacos de Hermosillo, Sonora comprobado por catadores y con documental en Netflix</p>
            <button type="button" className="btn btn-warning button"><Link to='/inversionista'>Invertir</Link></button>
            </div>
            <label className='label'><strong>Buquibichi Brewing</strong></label>
            <img className="card-img-top" src="https://media-cdn.tripadvisor.com/media/photo-s/10/0b/62/d3/buqui-bichi-en-todas.jpg" alt="Card image cap"/>
            <div className="card-body">
            <p className="card-text"> Cerveza Artesanal respaldada por el premio a "Mejor cerveza artesanal La Banquetera en 2018"</p>
            <button type="button" className="btn btn-warning button"><Link to='/inversionista'>Invertir</Link></button>
             </div>
             <label className='label'><strong>Panda Express</strong></label>
             <img className="card-img-top" src="https://pbs.twimg.com/profile_images/855132406533181444/GkXMvZuc.jpg" alt="Card image cap"/>
             <div className="card-body">
            <p className="card-text"> Franquicia de comida china fundada en 1973 Yangzhou China </p>
            <button type="button" className="btn btn-warning button"><Link to='/inversionista'>Invertir</Link></button>
            </div>
            <label className='label'><strong>Registro como startup</strong></label>
             <img className="card-img-top" src="https://assets.entrepreneur.com/content/3x2/2000/20160315152835-startup-pagina.jpeg?width=700&crop=2:1" alt="Card image cap"/>
             <div className="card-body">
            <p className="card-text"> Registro como startup </p>
            <button type="button" className="btn btn-warning button"><Link to='/startup'>Registrame ahora</Link></button>
            </div>
            
        </div>
    </div>
  );
}
export default Card2;