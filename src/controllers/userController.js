const UserModel= require("../models/userModel")


const createUser= async function (req, res) {
    let data= req.body
    let h_data= req.headers.isfreeappuser
    data["isFreeAppUser"] = h_data
    let savedData= await UserModel.create(data)
    res.send({data: savedData})
}




module.exports.createUser= createUser