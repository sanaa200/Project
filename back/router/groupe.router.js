const express = require('express');
const router = express.Router();
//controller path
const controller = require('../controller/groupe.controller');

// singup router 
// router.post('/signup', controller.signup);

//login router
// router.post('/login', controller.login);

// all enseignant router 
router.get('/Groupe',controller.getAllGroupe);

router.get('/Groupe/:id',controller.getIdGroupe);

 router.post('/Groupe', controller.postGroupe);

 router.put('/Groupe/:id',controller.putIdGroupe);
 
 router.delete('/Groupe/:id',controller.deleteIdGroupe);


module.exports = router ;
