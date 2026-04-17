const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


// Rutas 
app.get('/', (res, req) => {
    res.send('API funcionando');
});


module.exports = app;