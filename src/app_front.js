//FRONTEND


const express = require('express');
const { Inversionista, Startup } = require('./models/index.js');
const app = express();


//import React ,{ useEffect }  from 'react';
//import logo from './logo.svg';
//import './App.css';
//import Saludo from './Saludo';
//import Despedida from './Despedida';
//import Contador from './Contador';
//import Card from './Card';
//import axios from 'axios';



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/inversionista', (req, res) => {
    console.log(req.body);
    const inversionista = {
        name: req.body.name,
        last_name: req.body.last_name,
        birth_date: req.body.birth_date,
        date_registro: req.body.date_registro,
        is_active: req.body.is_active,
        num_tarjeta: req.body.num_tarjeta,
        liquidez: req.body.liquidez,
        foto:req.body.foto
    };

    const newInversionista = Inversionista(inversionista);

    newInversionista.save((err, inversionista) => {
        if (err) res.status(400).send(err)
        else res.status(201).send(inversionista);
    });
});

app.post('/startup', (req, res) => {
    console.log(req.body);
    const Startup = {
        name: req.body.name,
        owners: req.body.owners,
        description: req.body.description,
        initialdate: req.body.initialdate,
        deadline: req.body.deadline,
        totalinvestment: req.body.totalinvestment,
        stockpercentage: req.body.stockpercentage,
        roidate: req.body.roidate,
        tasaDeRendimiento: req.body.tasaDeRendimiento,
        age: req.body.age,
        comments: req.body.comments,
        foto:req.body.foto
    };

    const newStartup = Startup(Startup);

    newStartup.save((err, Startup) => {
        if (err) res.status(400).send(err)
        else res.status(201).send(Startup);
    });
});


//todos los inversionistas
app.get('/inversionista', () => {
    Inversionista.find().exec()
        .then(() => {
            res.send(respuesta);
        })
        .catch((err) => {
            res.status(400).send(err)
        })
});

app.get('/startup', () => {
    Startup.find().exec()
        .then(() => {
            res.send(respuesta);
        })
        .catch((err) => {
            res.status(400).send(err)
        })
});


//devolver un inversionista por ID//http://localgost:3000/heroe/5e8e8a42b66c533ae4c31e7c
app.get('/inversionista/:id', (req, res) => {
    const idInversionista = req.params.id;
    Inversionista.findOne({ _id: idInversionista }).exec()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(400).send(err)
        })
});

app.get('/startup/:id', (req, res) => {
    const idStartup = req.params.id;
    Startup.findOne({ _id: idStartup }).exec()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(400).send(err)
        })
});



app.listen(3000, () => {
    console.log('SERVER ON');
});
