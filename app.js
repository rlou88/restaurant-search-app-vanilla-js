const express = require('express');
const bodyParser = require('body-parser');
const Zomato = require('zomato.js');
const z = new Zomato(process.env.ZOMATO_API_KEY);

require('dotenv').config();
