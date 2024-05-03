const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db');
const express = require('express');
const app = express();
const {errorHandler} = require('./middleware/errorMiddleware');

connectDB();//conecta a la DB

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(errorHandler);
const port = process.env.PORT || 5000;//acá se está usando el puerto del .env y se agrega un OR donde si no funciona, usará el 5000
//const es una constante que no puede modificarse en ningún lado del programa, pero "let" es una variable normal (igual puede usarse var, aunque qué vintage)
app.listen(port, ()=> console.log(`Server started in ${port}`));

//aquí se llama al archivo con la ruta y funcionalidad de ese endpoint. Hay que delegar tareas entre archivos (nuevamente
//es como lo de ing software, hay que separar)
app.use('/api/prints',require('./routes/printRoutes'));
app.use('/api/clients',require('./routes/clientRoutes'));
app.use('/api/purchases',require('./routes/purchaseRoutes'));
app.use('/api/contacts',require('./routes/contactsRoutes'));

console.log("Server fully operational!!");