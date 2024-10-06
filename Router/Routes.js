const express = require('express')
const Route  = express.Router()
const routesController = require('../Controllers/movieController')
const upload = require('../ConfringFile/fileuploadConfring')

Route.get('/' , routesController.defultController)
Route.get('/contactForm',routesController.ContactController)
Route.get('/addform' ,routesController.addform) //open add movie form
Route.post('/addform',upload.single('poster') ,routesController.addmovieController) // post data on this path

module.exports = Route