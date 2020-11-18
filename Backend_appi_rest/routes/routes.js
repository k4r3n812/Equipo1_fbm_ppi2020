const express = require('express');
const router =express.Router();
const mysqlConnection = require('../db/db');

router.get('/estudiantes',(req,res)=>{
mysqlConnection.query('SELECT * FROM actores',(err,rows,fiels)=>{
    if(!err){
        //haga esto
        res.json(rows);
    }else{
        console.log(err);
    }//fin si
})//fin query


})//retorno de todos los estudiantes


//al final de todas las declaraciones
module.exports =router;
