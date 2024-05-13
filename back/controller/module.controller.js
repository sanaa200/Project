const connection = require('../connection');

module.exports.getAllModule = (req,res) => {

    let qr = ` select * from module `;
    connection.query(qr,(err,result) => {
        if(err){
            console.log(err,'erreur');
        }
        if(result.length >0){
     res.send({
        message : 'touts les modules :',
        data : result 
     });
        }

    });
}

module.exports.getIdModule = (req,res) => {

      let ID = req.params.id;
    let qr = ` select * from module  where ID_MODULE  = ${ID} `;
    connection.query(qr,(err,result) => {
        if(err){
            console.log(err,'erreur');
        }
        if( result.length > 0){
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

module.exports.postModule = (req,res) => {

    console.log(req.body,'create data ##');
     
    const idf = req.body.idf;
    const nom = req.body.nom;

    // first check email id already exit 
    let emailchkqry = `select *  from module where NOM_MODULE  = '${nom}' `;
    connection.query(emailchkqry, async (err, result) => {
        if (err) throw err;
        // check email id aleardy exists
        if (result.length > 0) {
            res.send({
                status: false,
                msg: ' module already exists'
            });
        }
        else {
            
            // insert data 

            let insertqry = `insert into module(ID_FILIERE,NOM_MODULE) values('${idf}','${nom}')`;
            connection.query(insertqry, (err, result) => {
                if (err) {
                    res.send({
                        message: ' wrong ... '
                        });
                    }
                res.send({
                    status: true,
                    message: ' module register successful !!'
                });
               
               });
        }
    });

}

module.exports.putIdModule =async (req,res) => {
     
    console.log(req.body,'update data ##');
    let ID = req.params.id;
    const idf = req.body.idf;
    const nom = req.body.nom;

    let emailchkqry = `select *  from module where NOM_MODULE  = '${nom}' `;
    connection.query(emailchkqry, async (err, result) => {
        if (err) throw err;
        // check email id aleardy exists
        if (result.length > 0) {
            res.send({
                status: false,
                msg: ' module already exists'
            });
        }
        else {
    
            // updat data 

 let qr = `update module set ID_FILIERE='${idf}' , NOM_MODULE ='${nom}' where ID_MODULE = '${ID}' `;
            connection.query(qr, (err, result) => {
                if (err) {
                     console.log (err);
                }

                res.send({
                    message: ' module modifier !!'
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

module.exports.deleteIdModule =async (req,res) => {
     
    let ID = req.params.id;
   
            // delete data 

    let qr = `delete from module where ID_MODULE ='${ID}' `;
            connection.query(qr, (err, result) => {
                if (err) {
                     console.log (err);
                }

                res.send({
                    message: ' module supprimé !! '
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
