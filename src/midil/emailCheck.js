var validator = require("email-validator");

const mild1 = async function(req, res, next){
    try{
        let data = req.body.email;
        let data1 = validator.validate(data);
        if(data1 == true){
            next()
        }else{
            res.status(400).send({status: false, msg: "Invalid email id."})
        }
    }catch(err){
        res.status(500).send({status: false, msg: err.message})
    }
}

module.exports.mild1 = mild1