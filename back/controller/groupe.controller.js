const connection = require('../connection');

module.exports.getAllGroupe = (req,res) => {

    let qr = ` select * from groupe `;
    connection.query(qr,(err,result) => {
        if(err){
            console.log(err,'erreur');
        }
        if(result.length >0){
     res.send({
        message : 'touts les groupes :',
        data : result 
     });
        }

    });
}

module.exports.getIdGroupe = (req,res) => {

      let ID = req.params.id;
    let qr = ` select * from groupe  where ID_GROUPE  = '${ID}' `;
    connection.query(qr,(err,result) => {
        if(err){
            console.log(err,'erreur');
        }
        if( result.length> 0){
     res.send({
        message : 'le groupe est :',
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

module.exports.postGroupe = (req,res) => {

    console.log(req.body,'create data ##');
     
    // const id = req.body.id_filiere;
    const idg = req.body.idg;
    const idf = req.body.idf;
    const id = req.body.id;
    const nom = req.body.nom;

    // first check email id already exit 
    let emailchkqry = `select ID_GROUPE  from groupe where ID_GROUPE  = '${idg}' `;
    connection.query(emailchkqry, async (err, result) => {
        if (err) throw err;
        // check email id aleardy exists
        if (result.length > 0) {
            res.send({
                status: false,
                msg: ' groupe already exists'
            });
        }
        else {
            
            // insert data 

            let insertqry = `insert into groupe(ID_GROUPE ,ID_FILIERE,ID,NOM_GROUPE) values('${idg}','${idf}','${id}','${nom}')`;
            connection.query(insertqry, (err, result) => {
                if (err) {
                    res.send({
                        message: ' wrong ... '
                        });
                    }
                res.send({
                    status: true,
                    message: ' groupe register successful !!'
                });
               
               });
        }
    });

}

module.exports.putIdGroupe =async (req,res) => {
     
    console.log(req.body,'update data ##');
    let ID = req.params.id;
    const idg = req.body.idg;
    const idf = req.body.idf;
    const id = req.body.id;
    const nom = req.body.nom;

    let emailchkqry = `select ID_GROUPE  from groupe where ID_GROUPE  = '${idg}' `;
    connection.query(emailchkqry, async (err, result) => {
        if (err) throw err;
        // check email id aleardy exists
        if (result.length > 0) {
            res.send({
                status: false,
                msg: ' groupe already exists'
            });
        }
        else {
    
            // updat data 

    let qr = `update groupe set  ID_GROUPE='${idg}' , ID_FILIERE='${idf}' , ID = '${id}', NOM_GROUPE ='${nom}' where ID_GROUPE = '${ID}' `;
            connection.query(qr, (err, result) => {
                if (err) {
                     console.log (err);
                }

                res.send({
                    message: ' groupe modifier !!'
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

module.exports.deleteIdGroupe =async (req,res) => {
     
    let ID = req.params.id;
   
            // delete data 

    let qr = `delete from groupe where ID_GROUPE ='${ID}' `;
            connection.query(qr, (err, result) => {
                if (err) {
                     console.log (err);
                }

                res.send({
                    message: ' groupe supprimé !! '
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
