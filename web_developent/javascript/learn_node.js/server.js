const express = require('express');
const morgan = require('morgan'); 
require('dotenv').config();
const mongoose = require('mongoose'); 
const methodOverride = require('method-override');  
const postRoutes = require('./routes/post-routes')
const contactRoutes = require('./routes/contact-routes')
const postApiRoutes = require('./routes/api-post-routes')
const {createPath, handleError} = require('./helpers/helper');

//const chalk = require('chalk');
//const successMsg = chalk.bgKeyword('green').white; //successMsg(text)

const app = express();
app.set('view engine', 'ejs');  

mongoose  
  .connect(process.env.MONGO_URL)   //подключение к БД через .env
  .then((res) => console.log('Connected to DB')) 
  .catch((error) => console.log(error)); 

app.listen(process.env.PORT,  (error) => {
  error ? console.log(error) : console.log(`Listening port ${process.env.PORT}`);
}); 

app.use(morgan(':method :url :status :res[content-length] - :response-time ms')) 
app.use(methodOverride('_method'))  
app.use(express.urlencoded({extended: false})); 
app.use(express.static('styles')); 


app.get('/', (req, res) => {
  const title = 'Home';
  res.render(createPath('index'), {title}); 
});

app.use(postRoutes);
app.use(contactRoutes);
app.use(postApiRoutes);

app.use((req, res) => {
  const title = 'Error page';
  res
    .status(404)
    .render(createPath('error'), {title});
});

