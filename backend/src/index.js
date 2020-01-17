const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://admin:admin@127.0.0.1:27017/semanaominstack?authSource=semanaominstack&gssapiServiceName=mongodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);