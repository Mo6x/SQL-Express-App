const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');
const { request, response } = require('express');
dotenv.config();


const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// creating route
app.post('/.insert', (request, response) => [

])

// Reading 
app.get('/.getALL', (request, response) => {
    response.json({
        success: true
    });
})



