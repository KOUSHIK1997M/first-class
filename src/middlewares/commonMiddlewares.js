const productModel= require("../models/productModel")
const UserModel= require("../models/userModel")


const midil1 = function(req, res, next){
    let h_data= req.headers.isfreeappuser
    if(!(h_data)){
        res.send({status: 404, msg: "Data is missing a mandatory header!"})
    }else{
        next()
    }
}

// User and product exist or not test
const midil2= async function (req, res, next) {
    let data= req.body
    let data1 = data.userId
    let data2 = data.productId
    let savedData= typeof(data1)
    let savedData1= typeof(data2)
    // let allUsers1=  PublisherModel.find({_id: data2})

    if(savedData != "undefined"){
        UserModel.findById(data1, function (err, docs) {
            if (err){
             res.send({msg: "User data is not exit..please sign up."});
            }else{
                if(savedData1 != "undefined") {
                    productModel.findById(data2, async function (err, docs) {
                        if (err) res.send({msg: "Oops...Product data is not exit..!!"})
                        else next()
                    });
                }else{
                    res.send({data: "Product Id Id is required"})
                }
            }
        });
    }else{
        res.send({data: "User Id is required"})
    }  
}





// const mid1= function ( req, res, next) {
//     req.falana= "hi there. i am adding something new to the req object"
//     console.log("Hi I am a middleware named Mid1")
//     next()
// }

// const mid2= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

// module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4

module.exports.midil1= midil1
module.exports.midil2 = midil2