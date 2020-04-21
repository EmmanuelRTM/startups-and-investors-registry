import React,{useState} from 'react';
//Use state para dinanismo

function Contador(){

const [number,setNumber]=useState(1);//Numero de inicio usestate8Num)
    //se crea parametro number a desplegar en la pagin y setnumber para modificar el valor de number en funciones
    const onClickHandler=()=>{
        console.log(`Se el dio click`);
        setNumber(number+1)//Set number para usar la funcion del dinanismo del cambio de una variable en un return
    }
    const onClickHandlerless=()=>{
        console.log(`Se el dio click`);
        setNumber(number-1)//Set number para usar la funcion del dinanismo del cambio de una variable en un return
    }

    //Onclick que pase si pones on click
    return(
        <div>
            <h1>Soy el componente Contador</h1>
            <p>{number}</p>
            <button onClick = {onClickHandler}>Sumar +</button>
            <button onClick = {onClickHandlerless}>Restar -</button>
        </div>
        );
}

export default Contador;