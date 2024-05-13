const connection = require('../connection');

module.exports.getAllFiliere = (req,res) => {

    let qr = ` select * from filiere `;
    connection.query(qr,(err,result) => {
        if(err){
            console.log(err,'erreur');
        }
        if(result.length >0){
     res.send({
        message : 'touts les filieres',
        data : result 
     });
        }

    });
}

module.exports.getIdFiliere = (req,res) => {

      let ID = req.params.id;
    let qr = ` select * from filiere  where ID_FILIERE = ${ID} `;
    connection.query(qr,(err,result) => {
        if(err){
            console.log(err,'erreur');
        }
        if( result.length > 0){
     res.send({
        message : 'le filiere est :',
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

module.exports.postFiliere = (req,res) => {

    console.log(req.body,'create data ##');
     
    // const id = req.body.id_filiere;
    const nom = req.body.nom;
    const description = req.body.description;

    // first check email id already exit 
    let emailchkqry = `select NOM_FILIERE from filiere where NOM_FILIERE = '${nom}' `;
    connection.query(emailchkqry, async (err, result) => {
        if (err) throw err;
        // check email id aleardy exists
        if (result.length > 0) {
            res.send({
                status: false,
                msg: ' filiere already exists'
            });
        }
        else {
            
            // insert data 

            let insertqry = `insert into filiere(NOM_FILIERE,DESCRIPTION_FILIERE) values('${nom}','${description}')`;
            connection.query(insertqry, (err, result) => {
                if (err) {
                    res.send({
                        message: ' wrong ... '
                        });
                    }
                res.send({
                    status: true,
                    message: ' filiere register successful !!'
                });
               
               });
        }
    });

}

module.exports.putIdFiliere =async (req,res) => {
     
    console.log(req.body,'update data ##');
    let ID = req.params.id;
    //const id = req.body.id_filiere;
    const nom = req.body.nom;
    const description = req.body.description;
    let emailchkqry = `select NOM_FILIERE from filiere where NOM_FILIERE = '${nom}' `;
    connection.query(emailchkqry, async (err, result) => {
        if (err) throw err;
        // check email id aleardy exists
        if (result.length > 0) {
            res.send({
                status: false,
                msg: ' filiere already exists'
            });
        }
        else {
    
            // updat data 

    let qr = `update filiere set  NOM_FILIERE='${nom}' , DESCRIPTION_FILIERE='${description}' where ID_FILIERE = '${ID}' `;
            connection.query(qr, (err, result) => {
                if (err) {
                     console.log (err);
                }

                res.send({
                    message: ' filiere modifier !!'
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

module.exports.deleteIdFiliere =async (req,res) => {
     
    let ID = req.params.id;
   
            // delete data 

    let qr = `delete from filiere where ID_FILIERE ='${ID}' `;
            connection.query(qr, (err, result) => {
                if (err) {
                     console.log (err);
                }

                res.send({
                    message: ' filiere supprimé !! '
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
