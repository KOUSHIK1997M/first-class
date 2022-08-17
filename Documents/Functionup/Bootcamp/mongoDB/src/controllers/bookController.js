const UserModel= require("../models/userModel")
const BookModel= require("../models/bookModel")

//=========================================================//


const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}



//=========================================================//


const createBooks= async function (req, res) {
    let data= req.body
    let data1 = req.body.author_id
    let allUsers= await UserModel.find({author_id: data1})
    if (allUsers.length > 0) BookModel.create(data) && res.send({msg: data}) 
    else res.send({msg: "Author id is not available"})
}


const authorBookList = async function (req, res){
    let all=  await UserModel.find({author_name: "Chetan Bhagat"})//.select({author_id: 1, _id: 0})
    let all1 = all.map(function (el) { return el.author_id; });
    let all2 = all1[0]
    let allUsers= await BookModel.find({author_id: all2}).select({name: 1, _id: 0})
    res.send({msg: allUsers})
}



const authorBookUpdate = async function (req, res){
    let data = req.body
    let all= await BookModel.findOneAndUpdate(
        {name: "Two states"},
        {$set: data}
    )
    res.send({msg: all})
}


const authorBookLists = async function (req, res){
    let all= await BookModel.find( { price : { $gte: 50, $lte: 100} } ) //.select({ author_id :1, author_name: 1, _id: 0})
    let all1 = all.map(function (el) { return el.author_id; });
    let all2 = all1[0]
    let user = await UserModel.find({author_id: all2}).select({author_id: 1, author_name: 1, _id: 0})
    res.send({msg: user})
}


// //CREATE
// //READ
// //UPDATE
// //DELETE
//     //===========================================================//

module.exports.createAuthor = createAuthor
module.exports.createBooks = createBooks
module.exports.authorBookList = authorBookList
module.exports.authorBookUpdate = authorBookUpdate
module.exports.authorBookLists = authorBookLists


