/*
const express = require('express');
const { Inversionista, Startup } = require('./models/index.js');
const app = express();
*/

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import React ,{ useEffect }  from 'react';
import logo from './logo.svg';
import './App.css';
//import Saludo from './Saludo';
//import Despedida from './Despedida';
//import Contador from './Contador';
import Card from './Card';
import Card2 from './Card2';
import axios from 'axios';

//use effect para require de apis
//Para bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from 'react';
import Formulario_Inversionista from './Formulario_Inversionista';
import Formulario_Startup from './Formulario_Proyecto';



function App() {
    const bye ="Sale chido";
    const hi= "que onda";

    const[inversionista,setInversionista]=useState([]);
//Se crea un elemento variable,setvariable
  useEffect(()=>{
    axios.get('/inversionista')
      .then((result)=>{
        //una vez solicitado la info se sigue retornando
        console.log(result.data);
        setInversionista(result.data);//Se guardan los datos del array de los autores de google api
      })
      .catch((err)=>{
        console.log(err);
      })
    console.log('Se ejecuto useEffect');
  }, []);

  const render =()=>{
    if(inversionista.length===0){
      return <h1>Cargando... </h1>
    }else{
      const listCardInvestors = inversionista.map((inversionista)=>{
        return <Card2 nombre={inversionista.name}/> //.name es el nombre del diccionario como keyword
      })
      return listCardInvestors
    }

    }

/*
    return (
        <div className="App row">
          {console.log('se retorno')}
    
          {/*
          <Saludo palabra={hi}/>
          <Despedida palabra= {bye} />  
          <Contador /> 
    
           {cards}
          
          }

          <Formulario_Inversionista/>
          <Formulario_Startup/>
          {/*render()}
          
        </div>
      );

*/

      return (
        <Router>
          <Switch>
            <Route exact path="/" component={Card2}>
                
            </Route>
            <Route path="/inversionista" component={Formulario_Inversionista}>
            </Route>
            <Route path="/startup" component={Formulario_Startup}>
            </Route>
          </Switch>
        </Router>




        
      );

      


}

export default App;
