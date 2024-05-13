const express = require('express');
const router = express.Router();
//controller path
const controller = require('../controller/module.controller');

// singup router 
// router.post('/signup', controller.signup);

//login router
// router.post('/login', controller.login);

// all enseignant router 
router.get('/Module',controller.getAllModule);

router.get('/Module/:id',controller.getIdModule);

 router.post('/Module', controller.postModule);

 router.put('/Module/:id',controller.putIdModule);
 
 router.delete('/Module/:id',controller.deleteIdModule);


module.exports = router ;
