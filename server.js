const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

 require('./database/db')
 
const mongoose = require('mongoose')
mongoose.pluralize(null)

//routes manage

const empRoute=require('./route/employee')
app.use('/employee',empRoute)


