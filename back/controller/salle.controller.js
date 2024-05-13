const connection = require('../connection');

module.exports.getAllSalle = (req,res) => {

    let qr = ` select * from salle `;
    connection.query(qr,(err,result) => {
        if(err){
            console.log(err,'erreur');
        }
        if( result.length >0){
     res.send({
        message : 'toutes les salles :',
        data : result 
     });
        }

    });
}

module.exports.getIdSalle = (req,res) => {

      let ID = req.params.id;
    let qr = ` select * from salle  where ID_SALLE  = '${ID}' `;
    connection.query(qr,(err,result) => {
        if(err){
            console.log(err,'erreur');
        }
        if( result.length > 0){
     res.send({
        message : 'la salle est :',
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

module.exports.postSalle = (req,res) => {

    console.log(req.body,'create data ##');
     
    const id = req.body.id;
    const effectif = req.body.effectif;
    const type = req.body.type;

    // first check email id already exit 
    let emailchkqry = `select *  from salle where ID_SALLE  = '${id}' `;
    connection.query(emailchkqry, async (err, result) => {
        if (err) throw err;
        // check email id aleardy exists
        if ( result.length > 0) {
            res.send({
                status: false,
                message: ' salle already exists'
            });
        }
        else {
            
            // insert data 

            let insertqry = `insert into salle(ID_SALLE,EFFECTIF,TYPE) values('${id}','${effectif}','${type}')`;
            connection.query(insertqry, (err, result) => {
                if (err) {
                    res.send({
                        message: ' wrong ... '
                        });
                    }
                res.send({
                    status: true,
                    message: ' salle register successful !!'
                });
               
               });
        }
    });

}

module.exports.putIdSalle =async (req,res) => {
     
    console.log(req.body,'update data ##');
    let ID = req.params.id;
    const id = req.body.id;
    const effectif = req.body.effectif;
    const type = req.body.type;

    let emailchkqry = `select *  from salle where TYPE ='${type}' and ID_SALLE = '${ID}'`;
    connection.query(emailchkqry, async (err, result) => {
        if (err) throw err;
        // check email id aleardy exists
        if (  result.length > 0) {
            res.send({
                status: false,
                message: ' salle already exists'
            });
        }
        else {
    
            // updat data 

 let qr = `update salle set ID_SALLE='${id}' , EFFECTIF ='${effectif}', TYPE ='${type}' where ID_SALLE = '${ID}' `;
            connection.query(qr, (err, result) => {
                if (err) {
                     console.log (err);
                }

                res.send({
                    message: ' salle modifier !!'
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

module.exports.deleteIdSalle =async (req,res) => {
     
    let ID = req.params.id;
   
            // delete data 

    let qr = `delete from salle where ID_SALLE ='${ID}' `;
            connection.query(qr, (err, result) => {
                if (err) {
                     console.log (err);
                }

                res.send({
                    message: ' salle supprimé !! '
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
