import React, { useState } from 'react'
import axios from 'axios'


function Inversionista () {
    const [name, setName] = useState(' ')
    const [last_name, setLastName] = useState(' ')
    const [birth_date, setBirthDate] = useState(' ')
    const [date_registro, setDate] = useState(' ')
    const [num_tarjeta, setNumTarjeta] = useState(' ')
    const [liquidez, setLiquidez] = useState(' ')
    const [foto, setFoto] = useState('')

    const onChangeInput = (event) => {
        console.log(event.target.value);
        console.log(event.target.id);
        const id = event.target.id
        switch (id) {
            case 'name':
                setName(event.target.value)
                break;
            case 'last_name':
                setLastName(event.target.value)
                break;
            case 'birth_date':
                setBirthDate(event.target.value)
                break;
            case 'date_registro':
                setDate(event.target.value)
                break;
            case 'NumTarjeta':
                setNumTarjeta(event.target.value)
                break;
            case 'liquidez':
                setLiquidez(event.target.value)
                break;
            case 'foto':
                setFoto(event.target.value)
                break;
            default:
                break;
        }
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log('Se submiteo');
        const body = {
            name: name,
            last_name: last_name,
            birth_date: birth_date,
            date_registro: date_registro,
            is_active: true,
            num_tarjeta: num_tarjeta,
            liquidez:liquidez,
            foto: foto
        }
        //const URL_MONGO = 'mongodb+srv://prueba:prueba1234@cluster0-7fvlb.mongodb.net/test?retryWrites=true&w=majority'
        const URL_INV='http://localhost:3000/inversionista';
        axios.post(URL_INV, body)
        .then((result)=> {
             console.log(result)
             alert('Se ha enviado tu información')
        }).catch((err)=> {
             console.log(err);
             alert('información mal enviada')
        });
    }
    return(
        <form className='m-5' onSubmit={onSubmitHandler}>
            <div className='form-group'>
                <label>Nombre</label>
                <input type='text' className= 'form-control' id='name' onChange={onChangeInput} value={name}></input>
            </div>
            <div className='form-group'>
                <label>Apellido</label>
                <input type='text' className= 'form-control' id='last_name' onChange={onChangeInput} value={last_name}></input>
            </div>
            <div className='form-group'>
                <label>Birth Date</label>
                <input type='date' className= 'form-control' id='birth_date' onChange={onChangeInput} value={birth_date}></input>
            </div>
            <div className='form-group'>
                <label> Date</label>
                <input type='date' className= 'form-control' id='date_registro' onChange={onChangeInput} value={date_registro}></input>
            </div>
            <div className='form-group'>
                <label>Numero de Tarjeta Bancaria</label>
                <input type="number" className= 'form-control' id='NumTarjeta' onChange={onChangeInput} value={num_tarjeta}></input>
            </div>
            <div className='form-group'>
                <label> Liquidez para Invertir</label>
                <input type='number' className= 'form-control' id='liquidez' onChange={onChangeInput} value={liquidez}></input>
            </div>
            <div className='form-group'>
                <label>Ingresa tu foto</label>
                <input type="file" className= 'form-control' id='foto'accept="image/x-png,image/gif,image/jpeg"  onChange={onChangeInput} value={foto}/>
            </div>
            <button type='submit'>Enviar</button>
    </form>
    )
}
export default Inversionista;