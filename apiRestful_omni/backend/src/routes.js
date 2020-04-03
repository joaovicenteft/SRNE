const express = require('express');
const routes = express.Router();
const OngController = require('../controllers/OngController')
const IncidentController = require('../controllers/IncidentController');
const ProfileController = require('../controllers/ProfileController');
const SessionController = require('../controllers/SessionController');

routes.post('/ongs',  OngController.createTableOngs);
routes.get('/ongs', OngController.returnAllTablesOngs);

routes.post("/sessions", SessionController.returnNameFromTableOngs);

routes.get("/profile", ProfileController.dataFromOng_id);


routes.post("/incidents", IncidentController.createTableIncidents);
routes.get("/incidents", IncidentController.returnDataFromTableIncidents);
routes.delete("/incidents/:id", IncidentController.deleteFromTableIncidentsById);



module.exports = routes;
