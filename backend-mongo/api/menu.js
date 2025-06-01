const express = require('express');
const cors = require('cors');

const { allUser, allCountry, allCompany, allChannel } = require('../queries/read');
const borrar = require('../queries/delete')
const { contact } = require('../models/menu.js');
 
const server = express();
server.use(express.json());
server.use(cors()) // para que permita que manden informacion desde afuera de este mismo puerto
server.listen(3000, () => console.log('El servicio se inició en el puerto 3000'));

server.get('/user', (req, res) => {
  allUser().then(resultado => {
    res.json(resultado);
  })
})

server.delete('/user/:id', borrar.user)

server.post('/user', borrar.user)


server.get('/country', (req,res) => {
  allCountry().then(resultado => {
    res.json(resultado);
  })
})

server.get('/company', (req,res) => {
  allCompany().then(resultado => {
    res.json(resultado);
  })
})

server.get('/channel', (req,res) => {
  allChannel().then(resultado => {
    res.json(resultado);
  })
})

server.post('/user', (req,res) =>{
  let menu = req.body;
  agregarUser(menu);
  res.send("se inserto correctamente")
})

// server.delete('/user/:id/delete', function(req, res){
//   contact.findByIdAndRemove({_id: req.params.id}, 
//      function(err, docs){
//   if(err) res.json(err);
//   });
//   });