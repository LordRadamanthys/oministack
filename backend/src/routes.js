const express = require('express')
const multer = require('multer')
const UploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardConstroller')
const BookingController = require('./controllers/BookingController')

const routes = express.Router()
const upload = multer(UploadConfig)

routes.post('/sessions/',SessionController.store)

routes.post('/spot/', upload.single('thumbnail'),SpotController.store)

routes.get('/spot/',SpotController.index)
routes.post('/spot/:spot_id/bookings',BookingController.store)

routes.get('/dashboard/',DashboardController.show)



module.exports = routes