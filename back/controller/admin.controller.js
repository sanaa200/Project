const connection = require('../connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { connect } = require('../router/admin.router');

module.exports.home = (req, res) => {
    res.send('api working  here ....');
}

// signup
module.exports.signup = (req, res) => {
    console.log(req.body, 'data##');

    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;

    //first check email id already exit 
    let emailchkqry = `select email from admin where email = '${email}' `;
    connection.query(emailchkqry, async (err, result) => {
        if (err) throw err;
        // check email id aleardy exists
        if (result.length > 0) {
            res.send({
                status: false,
                msg: 'email id already exists'
            });
        }
        else {
            // password decrypt
            decryptpwd = await bcrypt.hash(password, 10);

            // insert data 

            let insertqry = `insert into admin(NOM,PRENOM,EMAIL,PASSWORD,ROLE) values('${nom}','${prenom}','${email}','${decryptpwd}','${role}')`;
            connection.query(insertqry, (err, result) => {
                if (err) throw err;
                res.send({
                    status: true,
                    message: ' admin register successful'
                });
            });
        }
    });

}
//login

module.exports.login = (req, res) => {
    console.log(req.body, 'login');
    let email = req.body.email;
    let password = req.body.password;

    // checkemailid
    let chkemailid = ` select * from admin where email ='${email}' `;
    connection.query(chkemailid, async (err, result) => {
        if (err) throw err;

        if (result.length > 0) {

            let data = {
                nom : result[0].NOM ,
                prenom : result[0].PRENOM ,
                email : result[0].EMAIL,
                role : result[0].ROLE 
            }

            // check password 
            let chkpwd = await bcrypt.compare(password,result[0].PASSWORD);
            console.log(chkpwd, 'checkpwd##')
            if (chkpwd == true) {
                const token = jwt.sign({data},'privatkey');
                console.log(token,'token##');
                res.send({
                    status: true,
                    token : token , 
                    result : data ,
                    message: 'admin login successful !!! '
                });
            }
            else {
                res.send({
                    status: false,
                    message: ' invalid admin !!! '
                });
            }

        }
        else {
            res.send({
                status: false,
                message: 'invalid email id ...'
            });

        }
    });
}

// filiere
module.exports.filiere = (req,res) => {
    console.log(req.token,'reqtoken##');
    // check verifyToken
    let chkToken = verifyToken(req.token);
    console.log(chkToken,'chkToken##');
  if(chkToken.status==true){

    let filiereqry = ` select * from filiere `;
    connection.query(filiereqry , (err,result) => {
    if(err) throw err ;
    if(result.length > 0){
        res.send({
            status : true ,
            data : result
        });
    }
   else {
    res.send({
        status : false ,
        message :  ' data not found '
    });
   }
  });
} 
else
{
    res.send({
        status : false,
        message : 'token invalid ...'
    });
}
}

// verifytokens
function verifyToken(token)
{
      return jwt.verify(token,'privatkey',(err,result)=>{
        if(err)
        {
            let a = {status : false}
            return a;
        }
        else {
            let b = { status : true}
            return b;
        }
      });
}