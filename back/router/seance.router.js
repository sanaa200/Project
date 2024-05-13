const express = require('express');
const router = express.Router();
//controller path
const controller = require('../controller/seance.controller');

// singup router 
// router.post('/signup', controller.signup);

//login router
// router.post('/login', controller.login);

// all enseignant router 
router.get('/Seance',controller.getAllSeance);

router.get('/Seance/:id',controller.getIdSeance);

 router.post('/Seance', controller.postSeance);

 router.put('/Seance/:id',controller.putIdSeance);
 
 router.delete('/Seance/:id',controller.deleteIdSeance);


module.exports = router ;
