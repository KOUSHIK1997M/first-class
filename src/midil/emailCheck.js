var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

function isEmailValid(email) {
    if (!email)
        return false;

    if(email.length>254)
        return false;

    var valid = emailRegex.test(email);
    if(!valid)
        return false;

    // Further checking of some things regex can't handle
    var parts = email.split("@");
    if(parts[0].length>64)
        return false;

    var domainParts = parts[1].split(".");
    if(domainParts.some(function(part) { return part.length>63; }))
        return false;

    return true;
}


const mild1 = async function(req, res, next){
    try{
        let data = req.body.email;
        let data1 = isEmailValid(data)
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