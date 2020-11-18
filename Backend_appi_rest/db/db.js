const mysql= require('mysql');
const mysqlConnection= mysql.createConnection({
   /* host:'181.133.136.83',
    user:'mediatecnica',
    password:'123',
    database:'lab_mediatecnica', 
    multipleStatements:true*/
     host:'bjpsci5knqpfc5tu40vv-mysql.services.clever-cloud.com',
    user:'uvtjw4l4iipei5kh',
    password:'1YtCrhXw95jZG1uidAk4',
    database:'bjpsci5knqpfc5tu40vv', 
    multipleStatements:true
}
);//fin conexión 
mysqlConnection.connect(function(err){
    if(err){
        console.error(err);
return;
    }else{
        console.log('Base de datos conectada')
    }
})

module.exports= mysqlConnection;
