const express = require('express');
const router = express.Router();
//controller path
const controller = require('../controller/etudiant.controller');

// singup router 
// router.post('/signup', controller.signup);

//login router
// router.post('/login', controller.login);

// all enseignant router 
router.get('/Etudiant',controller.getAllEtudiant);

router.get('/Etudiant/:id',controller.getIdEtudiant);

 router.post('/Etudiant', controller.postEtudiant);

 router.put('/Etudiant/:id',controller.putIdEtudiant);
 
 router.delete('/Etudiant/:id',controller.deleteIdEtudiant);

 // Nouvelle route pour afficher la photo de l'étudiant
router.get('/Etudiant/photo:id', controller.getPhotoEtudiant);


module.exports = router ;
