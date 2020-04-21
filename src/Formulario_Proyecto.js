import React, {useState} from 'react';
import axios from 'axios';


//solicitud del formulario para autores
function Formulario_Proyecto (){
    
    const [name,setName]=useState('');
    const[owners,setOwners]=useState('');
    const[description,setDescription]=useState('');
    const [initialdate,setinitialdate]=useState('');
    const [deadline,setdeadline]=useState('');
    const [totalinvestment,settotalinvestment]=useState(0);
    const [stockpercentage,setstockpercentage]=useState(0);
    const [roidate,setroidate]=useState('');
    const [age,setAge]=useState(0);
    const [comments,setcomments]=useState('');
    const [foto, setFoto] = useState('')

//verificación
    
    const onChangeInput =(event)=>{
        console.log(event.target.value);
        console.log(event.target.id);
        const id=event.target.id
        switch(id){
            case 'name':
                setName(event.target.value); 
                break;
            case'owners':
                setOwners(event.target.value); 
                break;
            case'description':
                setDescription(event.target.value); 
                break;
            case'initial_date':
                setinitialdate(event.target.value); 
                break;
            case'dead_line':
                setdeadline(event.target.value); 
                break;
            case'total_investment':
                settotalinvestment(event.target.value); 
                break;
            case'stock_percentage':
                setstockpercentage(event.target.value); 
                break;
            case'roi_date':
                setroidate(event.target.value); 
                break;
            case'age':
                setAge(event.target.value); 
                break;
            case'comments':
                setcomments(event.target.value); 
                break;
            case 'foto':
                setFoto(event.target.value)
                break
            default:
                break;
        }
   }

   const onSUbmitHandle=(event)=>{
       event.preventDefault();
       console.log('Se submited');

//creado body  keyvalue: value
       const body={
           
           name:name,
           owners:owners,
           description:description,
           initialdate:initialdate,
           deadline:deadline,
           totalinvestment:totalinvestment,
           stockpercentage:stockpercentage,
           roidate:roidate,
           age:age,
           comments:comments,
           foto:foto
       }
       //aquí debe ir moogose
        //const URL_MONGO = 'mongodb+srv://prueba:prueba1234@cluster0-7fvlb.mongodb.net/test?retryWrites=true&w=majority'   
       const URL_startup='http://localhost:3000/startup';
        axios.post(URL_startup, body)
       .then((result)=>{
            console.log(result)
            alert('Ya se creo el proyecto ');
       }).catch((err)=>{
            console.log(err);
            alert('No funciono ');
       })


   }
   
    return (
        <form className="m-5" onSubmit={onSUbmitHandle}>
            <div className="form-group">
                <label>Nombre del proyecto</label>
                <input type="text" className="form-control" id="name" onChange={onChangeInput} value={name}/>
            </div>

            <div className="form-group">
                <label>Propietarios del proyecto</label>
                <input type="text" className="form-control" id="owners" onChange={onChangeInput} value={owners}/>
            </div>

            <div className="form-group">
                <label>Descripcion del proyecto</label>
                <input type="text" className="form-control" id="description" onChange={onChangeInput} value={description}/>
            </div>

            <div className="form-group">
                <label>Fecha de inicio de inversión</label>
                <input type="date" className="form-control" id="initial_date" onChange={onChangeInput} value={initialdate}/>
            </div>

            <div className="form-group">
                <label>Deadline de la inversión</label>
                <input type="date" className="form-control" id="dead_line" onChange={onChangeInput} value={deadline}/>
            </div>

            <div className="form-group">
                <label>Inversion Total Necesaria</label>
                <input type="number" className="form-control" id="total_investment" onChange={onChangeInput} value={totalinvestment}/>
            </div>

            <div className="form-group">
                <label>Porcentaje de compra del monto total</label>
                <input type="number" className="form-control" id="stock_percentage" onChange={onChangeInput} value={stockpercentage}/>
            </div>

            <div className="form-group">
                <label>Deadline de retorno de la inversión</label>
                <input type="date" className="form-control" id="roi_date" onChange={onChangeInput} value={roidate}/>
            </div>

            <div className="form-group">
                <label>Tiempo operando (meses) </label>
                <input type="number" className="form-control" id="age" onChange={onChangeInput} value={age}/>
            </div>

            <div className="form-group">
                <label>Comentarios adicionales</label>
                <input type="text" className="form-control" id="comments" onChange={onChangeInput} value={comments}/>
            </div>
            <div className='form-group'>
                <label>Ingresa tu foto</label>
                <input type="file" className= 'form-control' id='foto'accept="image/x-png,image/gif,image/jpeg"  onChange={onChangeInput} value={foto}/>
            </div>

            
{/*
            <div className="form-group">
                <label>Genero</label>
                <select className="form-control" id="gender" onChange={onChangeInput} value={gender}>
                    <option value="F">Femenionio</option>
                    <option value="M">Masculino</option>
                </select>
            
</div>*/}

            <button type="submit">Guardar la info</button>


        </form>
    )
}

export default Formulario_Proyecto;