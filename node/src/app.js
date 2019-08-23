'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conecta ao banco
mongoose.connect('mongodb+srv://wendreof:thebestsandra3@wendreof-omnob.azure.mongodb.net/test', {
    useNewUrlParser: true,
})

//Carrega os Models
const Product = require('./models/product')
const Customer = require('./models/customer')
const Order = require('./models/order')

//Carrega as Rotas
const indexRoute = require('./routes/index-route')
const productsRoute = require('./routes/product-route')
const customersRoute = require('./routes/customer-route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', indexRoute);
app.use('/products', productsRoute);
app.use('/customers', customersRoute);

module.exports = app;