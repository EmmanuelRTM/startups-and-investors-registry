import React from 'react';
//Primer componente creado desde mi parte
function Saludo(props){
    console.log(props)
    console.log(props.palabra)
    return(
        <h1>{props.palabra}</h1>
    )
}

export default Saludo;