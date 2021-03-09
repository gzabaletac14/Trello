const express = require('express');
const Notas = require('../Models/Notas');
const router = express.Router();
const Nota = require('../Models/Notas');

router.get('/', async (req, res)=>{
 const Nota =   await  Notas.find()
});


module.exports = router; 