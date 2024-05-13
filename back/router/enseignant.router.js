const express = require('express');
const router = express.Router();
//controller path
const controller = require('../controller/enseignant.controller');

// singup router 
// router.post('/signup', controller.signup);

//login router
// router.post('/login', controller.login);

// all enseignant router 
router.get('/Enseignant',controller.getAllEnseignant);

router.get('/Enseignant/:id',controller.getIdEnseignant);

 router.post('/Enseignant', controller.postEnseignant);

 router.put('/Enseignant/:id',controller.putIdEnseignant);
 
 router.delete('/Enseignant/:id',controller.deleteIdEnseignant);


module.exports = router ;
