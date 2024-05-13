const express = require('express');
const router = express.Router();
//controller path
const controller = require('../controller/ens.controller');

router.get('/home', controller.home);
// singup router 
router.post('/signup', controller.signup);

//login router
router.post('/login', controller.login);

// filiere router 
router.get('/filiere',requiredToken, controller.filiere);


// requiredToken
function requiredToken(req,res,next){
    let headers = req.headers["token"];
    console.log(headers,'token##');
    if(typeof headers!==undefined && headers!=="")
    {
        req.token = headers;
        next();
    }
    else {
        res.send({
            status : false ,
            message : ' token required .... '
        }); 
    }
}


 module.exports = router ;