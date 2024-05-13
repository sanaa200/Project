const connection = require('../connection');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');
const multer = require ('multer');

module.exports.getAllEtudiant = (req,res) => {

    let qr = ` select * from etudiant `;
    connection.query(qr,(err,result) => {
        if(err){
            console.log(err,'erreur');
        }
        if(result.length >0){

            result.forEach((etudiant) => {
                const photoBuffer = etudiant.PHOTO;
                const photoFileName = etudiant.ID + '.jpeg'; // Générer un nom de fichier unique
                // const photoFilePath = path.join('images', photoFileName);
                
                // // Enregistrer le fichier sur le serveur
                // fs.writeFileSync(photoFilePath, photoBuffer);
                
                // // Utiliser l'URL du fichier pour afficher l'image
                // etudiant.PHOTO_URL = 'images/' + photoFileName;
              });

       res.send({
        message : 'touts les etudiants',
        data : result 
     });
        }

    });
}

// ghanhtajha fach nbghi n3yt 3la tsawr les etudiants!!!!!!!!!!!!!!!!

// module.exports.getAllEtudiant = (req, res) => {
//     let qr = `SELECT * FROM etudiant`;
//     connection.query(qr, (err, result) => {
//       if (err) {
//         console.log(err, 'erreur');
//         res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des étudiants.' });
//         return;
//       }
//       if (result.length > 0) {
//         // Convertir la valeur LONGBLOB en base64
//         result.forEach((etudiant) => {
//             etudiant.PHOTO = etudiant.PHOTO.toString('base64');
//           console.log(etudiant.PHOTO);
//         });
//     //     result.forEach((etudiant) => {
//     //     etudiant.PHOTO = etudiant.PHOTO.toString('base64');
//     //     const blob = new Blob([etudiant.PHOTO],{type: 'image/jpg'});
//     //     const url = URL.createObjectURL(blob);
//     //     console.log(url);
//     // });
//         res.send({
//           message: 'Tous les étudiants',
//           data: result
//         });
//       } else {
//         res.status(404).json({ error: 'Aucun étudiant trouvé.' });
//       }
//     });
//   };

module.exports.getIdEtudiant = (req,res) => {

      let ID = req.params.id;
    let qr = ` select * from etudiant  where id=${ID} `;
    connection.query(qr,(err,result) => {
        if(err){
            console.log(err,'erreur');
        }
        if(result.length >0){
     res.send({
        message : " l'etudiant est :",
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

module.exports.postEtudiant =async (req,res) => {
     
    const id = req.body.id;
    const idg = req.body.idg;
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;
    const cne = req.body.cne;
    const photo = req.body.photo;

    //first check email id already exit 
    let emailchkqry = `select * from etudiant where email = '${email}' `;
    connection.query(emailchkqry, async (err, result) => {
        if (err) throw err;
        // check email id aleardy exists
        if (result.length > 0) {
            res.send({
                status: false,
                message: 'email already exists'
            });
        }
        else {
            // password decrypt
            decryptpwd = await bcrypt.hash(password, 10);

            // insert data 

            let insertqry = `insert into etudiant(ID,ID_GROUPE,NOM,PRENOM,EMAIL,PASSWORD,ROLE,CNE,PHOTO) values('${id}','${idg}','${nom}','${prenom}','${email}','${decryptpwd}','${role}','${cne}' ,'${photo}')`;
            connection.query(insertqry, (err, result) => {
                if (err) {
                    res.send({
                        message: ' wrong ... '
                        });
                    }
                res.send({
                    status: true,
                    message: ' etudiant register successful !!'
                });
               
               });
        }
    });

}

module.exports.putIdEtudiant =async (req,res) => {
     
    let ID = req.params.id;
    const id = req.body.id;
    const idg = req.body.idg;
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;
    const cne = req.body.cne;
    const photo = req.body.photo;

    // let emailchkqry = `select * from etudiant where id = '${id}' `;
    // connection.query(emailchkqry, async (err, result) => {
    //     if (err) throw err;
    //     // check email id aleardy exists
    //     if (result.length > 0) {
    //         res.send({
    //             status: false,
    //             message: 'etudiant already exists'
    //         });
    //     }
    //     else {

             decryptpwd = await  bcrypt.hash(password, 10);

            // updat data 

    let qr = `update etudiant set ID = '${id}', ID_GROUPE = '${idg}' , NOM ='${nom}' , PRENOM = '${prenom}' ,EMAIL = '${email}' , PASSWORD = '${decryptpwd}' , ROLE = '${role}', CNE = '${cne}' , PHOTO = '${photo}' where ID = '${ID}' `;
            connection.query(qr, (err, result) => {
                if (err) {
                     console.log (err);
                }

                res.send({
                    message: ' etudiant modifier successful !!'
                });
            
            //    else {
            //     res.send({
            //     message: ' wrong ... '
            // });
            // }

            });
    //     }
    // });
         
}

module.exports.deleteIdEtudiant =async (req,res) => {
     
    let ID = req.params.id;
   
            // delete data 

    let qr = `delete from etudiant where id = '${ID}' `;
            connection.query(qr, (err, result) => {
                if (err) {
                     console.log (err);
                }

                res.send({
                    message: ' etudiant supprimé successful !! '
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


module.exports.getPhotoEtudiant = (req, res) => {
    const ID = req.params.id;

    // Récupérer la photo de l'étudiant depuis la base de données
  let qr = `SELECT PHOTO FROM etudiant WHERE id = '${ID}'`;
  connection.query(qr, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message: "Erreur lors de la récupération de la photo de l'étudiant",
      });
    } else {
      if (result.length > 0) {
        // Le résultat contient la photo sous formede données binaires

        // Écrire les données binaires dans un fichier temporaire
        const photoData = result[0].PHOTO;
    const photoPath = `C:/Users/Lenovo/Desktop/SECURITE/${ID}.jpg`; // Remplacez par le chemin vers le dossier contenant les photos des étudiants
  
    fs.readFile(photoPath, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send({
          message: 'Erreur lors de la récupération de la photo de l\'étudiant',
        });
      } else {
        res.writeHead(200, {
          'Content-Type': 'image/jpeg',
          'Content-Length': data.length
        });
        res.end(data);
      }
    });
   }
 }
  });
  };