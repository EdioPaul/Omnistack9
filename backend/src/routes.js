const express = require ('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

//pega parametros do usuario via requisição no controller
routes.post('/sessions', SessionController.store);
//filtra os spots por tecnologia
routes.get('/spots', SpotController.index);
//cria o spot e sob a imagem
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
//rota dos spots do usuario    
routes.get('/dashboard', DashboardController.show);

//rota encadeada ( nested )
//cria reserva dentro do spot
routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;