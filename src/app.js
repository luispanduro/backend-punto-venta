import express from 'express'; 
import morgan from 'morgan';
import cors from 'cors'; 

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


// Rutas 
app.get('/', (res, req) => {
    res.send('API funcionando');
});


export default app;