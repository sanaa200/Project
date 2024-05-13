const connection = require('../connection');

module.exports.getAllSeance = (req,res) => {

    let qr = ` select * from seance `;
    connection.query(qr,(err,result) => {
        if(err){
            console.log(err,'erreur');
        }
        if(result.length >0){
     res.send({
        message : 'touts les seances :',
        data : result 
     });
        }

    });
}

module.exports.getIdSeance = (req,res) => {

      let ID = req.params.id;
    let qr = ` select * from seance  where ID_SEANCE  = ${ID} `;
    connection.query(qr,(err,result) => {
        if(err){
            console.log(err,'erreur');
        }
        if( result.length > 0){
     res.send({
        message : 'la seance est :',
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

module.exports.postSeance = (req,res) => {

    console.log(req.body,'create data ##');
     
    const ids = req.body.ids;
    const idm = req.body.idm;

    // first check email id already exit 
    let emailchkqry = `select *  from seance where ID_SEANCE  = '${ids}' `;
    connection.query(emailchkqry, async (err, result) => {
        if (err) throw err;
        // check email id aleardy exists
        if (result.length > 0) {
            res.send({
                status: false,
                message: ' seance already exists'
            });
        }
        else {
            
            // insert data 

            let insertqry = `insert into seance(ID_SEANCE,ID_MODULE) values('${ids}','${idm}')`;
            connection.query(insertqry, (err, result) => {
                if (err) {
                    res.send({
                        message: ' wrong ... '
                        });
                    }
                res.send({
                    status: true,
                    message: ' seance register successful !!'
                });
               
               });
        }
    });

}

module.exports.putIdSeance =async (req,res) => {
     
    console.log(req.body,'update data ##');
    let ID = req.params.id;
    const ids = req.body.ids;
    const idm = req.body.idm;


    let emailchkqry = `select *  from seance where ID_SEANCE  = '${ids}' `;
    connection.query(emailchkqry, async (err, result) => {
        if (err) throw err;
        // check email id aleardy exists
        if (result.length > 0) {
            res.send({
                status: false,
                message: ' seance already exists'
            });
        }
    else{
            // updat data 

 let qr = `update seance set ID_SEANCE='${ids}' , ID_MODULE ='${idm}' where ID_SEANCE = '${ID}' `;
            connection.query(qr, (err, result) => {
                if (err) {
                     console.log (err);
                }

                res.send({
                    message: ' seance modifier !!'
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

module.exports.deleteIdSeance =async (req,res) => {
     
    let ID = req.params.id;
   
            // delete data 

    let qr = `delete from seance where ID_SEANCE ='${ID}' `;
            connection.query(qr, (err, result) => {
                if (err) {
                     console.log (err);
                }

                res.send({
                    message: ' seance supprimé !! '
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
