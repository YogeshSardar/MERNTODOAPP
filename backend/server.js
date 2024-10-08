const express = require('express');
const dotenv = require('dotenv').config({path:"backend/.env"});
const colors =require('colors')
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');


const port = process.env.PORT || 6000;

connectDB()

const app = express();
app.use(express.json()); 
app.use(express.urlencoded({extended:false}))
app.use('/api/goals', require('./routes/goroutes'))
app.use('/api/users', require('./routes/userRoute'))


app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));