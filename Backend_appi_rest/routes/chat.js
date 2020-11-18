const express = require('express');
const router =express.Router();
const mysqlConnection = require('../db/db');

router.get('/',(req,res)=>{
    mysqlConnection.query('SELECT * FROM chat',(err,rows,fiels)=>{
        if(!err){
            //haga esto
            res.json(rows);
        }else{
            console.log(err);
        }//fin si
    })//fin query
    
    
    })//retorno de todos los estudiantes

<<<<<<< HEAD
    router.post('/nuevo-chat',(req,res)=>{
=======
    router.post('/nuevo-historial',(req,res)=>{
>>>>>>> 6d75d1c3f67f4b48e87575655657264a6fe89e7d
        const {documento_id,genero,cargo,fecha_de_nacimiento}=req.body;
        
        let chat =[id_chat,descripcion,fecha_sistem,hora_sistem,respuesta,historial];
        
        let nuevoChat =`INSERT INTO chat(id_chat,descripcion,fecha_sistem,hora_sistem,respuesta,historial)
        VALUES(?,?,?,?)`;
        mysqlConnection.query(nuevoChat,chat,(err,results,fields)=>{
        if(err){
           return console.error(err.message());
        }else{
           res.json({message:`Mensaje efectivo`})
        }
        })});
<<<<<<< HEAD
        //actualizar un chat por el id del chat 
        router.post('/chat/:id_chat',(req,res)=>{
=======
        router.post('/historial/:id_chat',(req,res)=>{
>>>>>>> 6d75d1c3f67f4b48e87575655657264a6fe89e7d
           const {documento_id,genero,cargo,fecha_de_nacimiento}=req.body;
           const {documento_id} =req.body;
           
           
<<<<<<< HEAD
           mysqlConnection.query(`UPDATE chat SET id_chat=?,descripcion=?,fecha_sistem=? ,hora_sistem?, historial? WHERE respuesta=?`,
      [id_chat,descripcion,fecha_sistem,hora_sistem,respuesta,historial],(err,rows,fields)=>{
=======
           mysqlConnection.query(`UPDATE chat SET id_chat=?,historial=?,respuesta=?,fecha_sistem=?,hora_sistem?`,
      [id_chat,descripcion,fecha_sistem,hora_sistem,respuesta,historial],(err,rows,fields)=>{
>>>>>>> 6d75d1c3f67f4b48e87575655657264a6fe89e7d
           if(!err){
              
              res.json({status:`Chat exitoso`});
           }else{
              console.log(err);
             
           }
           })});
        
<<<<<<< HEAD
           router.get('/chat/:id_chat',(req,res)=>{
=======
           router.get('/chat/:id_chatd',(req,res)=>{
>>>>>>> 6d75d1c3f67f4b48e87575655657264a6fe89e7d
              const {id} =req.params;
              mysqlConnection.query('SELECT * from chat where id_chat= ? ',[id_chat],(err,rows,fields)=>{
              if(!err){
                 res.json(rows); 
              }else{
              console.log(err);
              }});  })// fin

<<<<<<< HEAD
              //inicio sesion
                 
           router.get('/chat',(req,res)=>{
            const {id_chat, historial} =req.params;
            mysqlConnection.query('SELECT * from chat WHERE id_chat= ?  AND contraseña=?',[id_chat, historial],(err,rows,fields)=>{
            if(!err){
               res.json(rows); 
            }else{
            console.log(err);
            }});  })// fin
           

module.exports =router;
=======
module.exports =router;
>>>>>>> 6d75d1c3f67f4b48e87575655657264a6fe89e7d