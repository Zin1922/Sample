const express = require("express");
const morgan = require("morgan");
const bodyParser= require("body-parser");
const  mongoose = require("mongoose");
const dotenv = require(`dotenv`);
const cors = require("cors");


dotenv.config();

const app = express();





//Connection acces to mongoDb
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err){
        console.log(err);
    }else {
        console.log("Connection Request Success")
    }
});

//Middlewares terminal
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Get Data
const productRoutes = require('./routes/product');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/auth');

app.use('/api', userRoutes);
app.use('/api', adminRoutes);
app.use('/api', productRoutes);


app.listen(3000, err => {
    if (err){
        console.log(err);
    }else {
        console.log('Listening on PORT', 3000);
    }
});