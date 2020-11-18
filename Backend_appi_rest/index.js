const express =require ('express');
const app = express();
const routes = require('./routes/routes');
const usuarios = require('./routes/usuarios');


app.set('port',3000)//

//middleware
app.use(express.json());
//ajustes
app.use('/api',routes);//peticiones directas,acciones,callback
app.use('/api/usuarios',usuarios);

app.listen(app.get('port'),()=>{
console.log('servidor corriendo en puerto'+app.get('port'));
});