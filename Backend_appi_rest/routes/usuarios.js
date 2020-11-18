const express = require('express');
const router =express.Router();
const mysqlConnection = require('../db/db');

router.get('/',(req,res)=>{
    mysqlConnection.query('SELECT * FROM usuarios',(err,rows,fiels)=>{
        if(!err){
            //haga esto
            res.json(rows);
        }else{
            console.log(err);
        }//fin si
    })//fin query
    
    
    })//retorno de todos los estudiantes

<<<<<<< HEAD
    router.post('/nuevo-usuario',(req,res)=>{
=======
    router.post('/nuevo-registro',(req,res)=>{
>>>>>>> 6d75d1c3f67f4b48e87575655657264a6fe89e7d
        const {documento_id,genero,cargo,fecha_de_nacimiento}=req.body;
        
        let alumno =[documento_id,genero,cargo,fecha_de_nacimiento];
        
        let nuevoAlumno =`INSERT INTO usuarios(documento_id,genero,cargo,fecha_de_nacimiento)
        VALUES(?,?,?,?)`;
        mysqlConnection.query(nuevoAlumno,alumno,(err,results,fields)=>{
        if(err){
           return console.error(err.message());
        }else{
           res.json({message:`Registro correcto`})
        }
        })});
<<<<<<< HEAD
        //actualizar un usuario por su documento id 
        router.post('/usuario/:documento_id',(req,res)=>{
=======
        router.post('/estudiante/:id',(req,res)=>{
>>>>>>> 6d75d1c3f67f4b48e87575655657264a6fe89e7d
           const {documento_id,genero,cargo,fecha_de_nacimiento}=req.body;
           const {documento_id} =req.body;
           
           
<<<<<<< HEAD
           mysqlConnection.query(`UPDATE usuarios SET cargo=?,genero=?,fecha_de_nacimiento=?  WHERE documento_id=?`,
      [cargo,genero,fecha_de_nacimiento,documento_id,],(err,rows,fields)=>{
=======
           mysqlConnection.query(`UPDATE usuarios SET documento_id=?,cargo=?,genero=?,fecha_de_nacimiento=?,`,
      [documento_id,fecha_de_nacimiento,cargo,genero],(err,rows,fields)=>{
>>>>>>> 6d75d1c3f67f4b48e87575655657264a6fe89e7d
           if(!err){
              
              res.json({status:`Datos actualizados`});
           }else{
              console.log(err);
             
           }
           })});
        
<<<<<<< HEAD
           router.get('/usuarios/:documento_id',(req,res)=>{
=======
           router.get('/estudiante/:documento_id',(req,res)=>{
>>>>>>> 6d75d1c3f67f4b48e87575655657264a6fe89e7d
              const {id} =req.params;
              mysqlConnection.query('SELECT * from usuarios where documento_id= ? ',[documento_id],(err,rows,fields)=>{
              if(!err){
                 res.json(rows); 
              }else{
              console.log(err);
              }});  })// fin

<<<<<<< HEAD
              //inicio sesion
                 
           router.get('/login',(req,res)=>{
            const {documento_id, contraseña} =req.params;
            mysqlConnection.query('SELECT * from usuarios WHERE documento_id= ?  AND contraseña=?',[documento_id, contraseña],(err,rows,fields)=>{
            if(!err){
               res.json(rows); 
            }else{
            console.log(err);
            }});  })// fin
           

module.exports =router;
=======
module.exports =router;
>>>>>>> 6d75d1c3f67f4b48e87575655657264a6fe89e7d
