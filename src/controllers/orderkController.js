const { count } = require("console")
const orderModel = require("../models/orderModel")
// const OrderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const createOrder =async function(req, res){
    let data = req.body
    let loo = data.productId
    let loa = data.userId
    let h_data= req.headers.isfreeappuser
    data["isFreeAppUser"] = h_data
    let data1 = await productModel.findById(loo).select({price: 1, _id: 0})
    console.log("connection ok");
    if(h_data == "true"){
        data["amount"] = 0
        let savedData= await orderModel.create(data)
        res.send({data: savedData});
    }else{
        data["amount"] = data1.price
        let all = await userModel.findById(loa).select({_id:0, balance:1, name:1})
        let price1 = all.balance - data1.price
        // res.send(all.name)
        if(price1 > 0){
            await userModel.updateMany(
            {name: all.name},
            {$set: {balance: price1}}
        )
        let savedData= await orderModel.create(data)
        res.send({data: savedData});
        }else{
            res.send({msg: "Your account balance is getting low. please recharge your account soon."})
        }
        // let savedData= await orderModel.create(data)
        // res.send({data: savedData});
    }

}


module.exports.createOrder = createOrder