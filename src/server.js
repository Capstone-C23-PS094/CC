//import modul
import express from 'express'
import dotenv from 'dotenv'
import logs from './middleware/logs.js' 

//import modul yang dibutuhkan dari routes
import diseaseRoute from './route/diseaseRoute.js'
import plantRoute from './route/plantRoute.js'
import authRoute from './route/authRoute.js'
import createError from 'http-errors'

dotenv.config();

const app = express();

// middleware 
app.use(express.json());  
app.use(express.urlencoded({ extended: false })); 
app.use(logs);

// router
app.use(authRoute);
app.use(diseaseRoute);
app.use(plantRoute);

//handling routes yang tidak ditemukan
app.use((req, res, next) => {
    next(createError.NotFound('Tidak Ditemukan'))
  });

//handling error
  app.use((err, req, res, next) => {
    const { status = 500, message } = err;
    res.status(status).json({ error: { status, message } });
  });


//port
const port = process.env.PORT || 5000
app.listen(`${port}`, () => {
    console.log(`Server berjalan di port ${port}`)
})