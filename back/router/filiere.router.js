const express = require('express');
const router = express.Router();
//controller path
const controller = require('../controller/filiere.controller');

// singup router 
// router.post('/signup', controller.signup);

//login router
// router.post('/login', controller.login);

// all enseignant router 
router.get('/Filiere',controller.getAllFiliere);

router.get('/Filiere/:id',controller.getIdFiliere);

 router.post('/Filiere', controller.postFiliere);

 router.put('/Filiere/:id',controller.putIdFiliere);
 
 router.delete('/Filiere/:id',controller.deleteIdFiliere);


module.exports = router ;
