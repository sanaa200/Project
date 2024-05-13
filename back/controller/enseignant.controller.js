const connection = require('../connection');
const bcrypt = require('bcrypt');

module.exports.getAllEnseignant = (req,res) => {

    let qr = ` select * from enseignant `;
    connection.query(qr,(err,result) => {
        if(err){
            console.log(err,'erreur');
        }
        if(result.length >0){
     res.send({
        message : 'touts les enseignants',
        data : result 
     });
        }

    });
}

module.exports.getIdEnseignant = (req,res) => {

      let ID = req.params.id;
    let qr = ` select * from enseignant  where id=${ID} `;
    connection.query(qr,(err,result) => {
        if(err){
            console.log(err,'erreur');
        }
        if(result.length >0){
     res.send({
        message : 'le enseignant est :',
        data : result 
     });
        }

        else{
            res.send({
                message : 'data not found !!'
            });
        }

    });
}

module.exports.postEnseignant = (req,res) => {
     
    const id = req.body.id;
    const ida = req.body.ida;
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;

    //first check email id already exit 
    let emailchkqry = `select email from enseignant where email = '${email}' `;
    connection.query(emailchkqry, async (err, result) => {
        if (err) throw err;
        // check email id aleardy exists
        if (result.length > 0) {
            res.send({
                status: false,
                message: 'enseignant already exists'
            });
        }
        else {
            // password decrypt
            decryptpwd = await bcrypt.hash(password, 10);

            // insert data 

            let insertqry = `insert into enseignant(ID,ADM_ID,NOM,PRENOM,EMAIL,PASSWORD,ROLE) values('${id}','${ida}','${nom}','${prenom}','${email}','${decryptpwd}','${role}')`;
            connection.query(insertqry, (err, result) => {
                if (err) {
                    res.send({
                        message: ' wrong ... '
                        });
                    }
                res.send({
                    status: true,
                    message: ' enseignant register successful !!'
                });
               
               });
        }
    });

}

module.exports.putIdEnseignant =async (req,res) => {
     
    let ID = req.params.id;
    const id = req.body.id;
    const ida = req.body.ida;
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;

    let emailchkqry = `select * from enseignant where  id = '${id}'`;
    connection.query(emailchkqry, async (err, result) => {
        if (err) throw err;
        // check email id aleardy exists
        if (result.length > 0) {
            res.send({
                status: false,
                message: 'enseignant already exists'
            });
        }
        else {

             decryptpwd = await  bcrypt.hash(password, 10);

            // updat data 

    let qr = `update enseignant set ID = '${id}', ADM_ID = '${ida}' , NOM ='${nom}' , PRENOM = '${prenom}' ,EMAIL = '${email}' , PASSWORD = '${decryptpwd}' , ROLE = '${role}' where ID = '${ID}' `;
            connection.query(qr, (err, result) => {
                if (err) {
                     console.log (err);
                }

                res.send({
                    message: ' enseignant modifier successful !!'
                });
            
            //    else {
            //     res.send({
            //     message: ' wrong ... '
            // });
            // }

            });
        }
    });
        
}

module.exports.deleteIdEnseignant =async (req,res) => {
     
    let ID = req.params.id;
   
            // delete data 

    let qr = `delete from enseignant where id = '${ID}' `;
            connection.query(qr, (err, result) => {
                if (err) {
                     console.log (err);
                }

                res.send({
                    message: ' enseignant supprimé successful !! '
                });
            });
         
}
 //// methode 2 de delete 
//  module.exports.deleteIdEnseignant = async (req, res) => {
//     let ID = req.params.id;
  
//     // Delete data
//     let qr = 'DELETE FROM enseignant WHERE ID = ?';
//     connection.query(qr, [ID], (err, result) => {
//       if (err) {
//         console.log(err);
//         res.status(500).send({
//           message: 'Erreur lors de la suppression de l\'enseignant',
//         });
//       } else {
//         res.send({
//           message: 'Enseignant supprimé avec succès',
//         });
//       }
//     });
//   };
