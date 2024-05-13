const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const multer = require ('multer');
const path = require('path');

const app = express();
app.use(cors());
// database connection
const connection = require('./connection');
connection.connect((err)=>{
   err?console.log('connection failed ....'):console.log('connection connected success ....');
});

const storage = multer.diskStorage({
    destination : '../frontend/src/app/enseignant/list-etudiant',
    filename : (req,file ,cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer ({
storage : storage
})
app.use('/profile',express.static('../frontend/src/app/enseignant/list-etudiant'));
app.post("/upload",upload.single('photo') ,(req,res) => {
   // console.log(req.file);
   res.json({
    succes :  1,
    profile_url : `http://localhost:3002/profile/${req.file.filename}`
   })

})

// router path 1
 const routeEns = require('./router/ens.router');
 // router path 2
 const routeAdmin = require('./router/admin.router');
 // router path 3
 const routeEnseignant = require('./router/enseignant.router');
 // router path 4 
 const routeFiliere = require('./router/filiere.router');
 // router path 5
 const routeGroupe = require('./router/groupe.router');
 // router path 6
 const routeModule = require('./router/module.router');
 // router path 7
 const routeEtudiant = require('./router/etudiant.router');
 // router path 8
 const routeSeance = require('./router/seance.router');
  // router path 9
 const routeSalle = require('./router/salle.router');


 //bodyparser
app.use(bodyparser.json());

app.use('/enseignant',routeEns);
app.use('/admin',routeAdmin);
app.use('/',routeEnseignant); 
app.use('/',routeFiliere);
app.use('/',routeGroupe);
app.use('/',routeModule);
app.use('/',routeEtudiant);
app.use('/',routeSeance);
app.use('/',routeSalle);

//server
app.listen(3002,(err)=>{
    if(err) throw err;
    console.log('server running .... ');
});
