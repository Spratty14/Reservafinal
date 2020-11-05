const express = require('express');
const path = require('path');
const ejs = require('ejs');
const morgan = require('morgan');

const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname,'views'));

//middlewares
app.use(morgan('dev'));

//routes
app.use(require('./routes/index'));

//static
app.use(express.static(path.join(__dirname,'public')));

//Server listenning
app.listen(app.get('port'), () =>{
    console.log('listenning on port ', app.get('port'));
});