const express = require('express');
const router = express.Router();
//controller path
const controller = require('../controller/salle.controller');

// singup router 
// router.post('/signup', controller.signup);

//login router
// router.post('/login', controller.login);

// all enseignant router 
router.get('/Salle',controller.getAllSalle);

router.get('/Salle/:id',controller.getIdSalle);

 router.post('/Salle', controller.postSalle);

 router.put('/Salle/:id',controller.putIdSalle);
 
 router.delete('/Salle/:id',controller.deleteIdSalle);


module.exports = router ;
