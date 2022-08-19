const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const path = require('path');
const pageRoute = require('./routes/pageRoute');
// const productRoute = require('./routes/productsRoute');
const userRoute = require('./routes/userRoute');



// environment variable
dotenv.config();
const port = process.env.port || 4000 ;



// express init
const app = express();


// data manege
app.use(express.json());
app.use(express.urlencoded( { extended : false}));

// static folder
app.use(express.static('/public'));


// // router init
app.use(pageRoute);
app.use(userRoute);





// server listen
app.listen(port, () => {
    console.log(`server is runing on port ${port} `.bgWhite.black);
});


