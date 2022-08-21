const { removeAllListeners } = require("../../../Bootcamp/mongoDB/src/models/bookModel")
const { updateMany } = require("../models/authorModel")
const authorModel= require("../models/authorModel")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")
const PublisherModel = require("../models/PublisherModel")
var ObjectId = require('mongodb').ObjectID

// const createBooks= async function (req, res) {
//     let data= req.body
//     let savedData= await BookModel.create(data)
//     res.send({data: savedData})
// }
//================================(1)=======================================//
const createBooks= async function (req, res) {
    let data= req.body
    let data1 = data.author
    let data2 = data.publisher
    let savedData= typeof(data1)
    let savedData1= typeof(data2)
    // let allUsers1=  PublisherModel.find({_id: data2})

    if(savedData != "undefined"){
        authorModel.findById(data1, function (err, docs) {
            if (err){
             res.send({data: "The author is not present."});
            }else{
                if(savedData1 != "undefined") {
                    authorModel.findById(data2, async function (err, docs) {
                        if (err) res.send({data: "The publisher is not present."})
                        else BookModel.create(data) && res.send({data: data})
                    });
                }else{
                    res.send({data: "Publisher Id is required"})
                }
            }
        });
    }else{
        res.send({data: "Author Id is required"})
    }  
}
//================================(2)=======================================//
const getAllBooks = async function (req, res){
    let author_d = await bookModel.find().populate("author" ).populate( "publisher")
    res.send({data: author_d})
}
// //================================(3)=======================================//


const updateBooks = async function (req, res){
    //part _1) ==>a
    let data = req.body.name
    let author_d = await PublisherModel.find({name: data})
    let all = author_d[0]._id
    let all1 = await bookModel.updateMany(
        {publisher: all},
        {$set: {"isHardCover": false}}    
    )
    //part _2) ====>b
    let book = await authorModel.find({rating: {$gte : 3.5}}).select({_id: 1})
    let all2 = book.map(async function(al){
        let all3 = await bookModel.updateMany(
            {author: al._id},
            {$set: {price: 100}}
        )
        return all3
    })
    res.send({data: all1})
}



// //=======================================================================//


// //CREATE
// //READ
// //UPDATE
// //DELETE
//     //===========================================================//

module.exports.createBooks = createBooks
module.exports.getAllBooks = getAllBooks
module.exports.updateBooks = updateBooks
