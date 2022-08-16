const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}


const getBookData= async function (req, res) {
    // let allBooks= await UserModel.find().count() //COUNT
    // let allBooks= await UserModel.find({authorName : "Koushik mandal", isPublished: true}) //AND
    // let allBooks= await UserModel.find({
    // $or: [{authorName : "Koushik mandal"}, {isPublished : true}]
    // }).select({bookName : 1, authorName : 1, _id : 0}) //Select keys that we want.
    
    // let allBooks= await UserModel.find().sort({selse: -1}) //SORT

    // //PAGINATION
    // let page = req.query.page
    // let allBooks= await UserModel.find().sort({sales: 1}).skip(2*(page - 1)).limit(2).select({bookName : 1, authorName : 1, _id : 0})

    // let allBooks= await UserModel.find({sales : {$eq : 137}})
    // let allBooks= await UserModel.find({sales : {$ne : 137}})
    // let allBooks= await UserModel.find({sales : {$gt : 50}})
    // let allBooks= await UserModel.find({sales : {$lt : 50}})
    // let allBooks= await UserModel.find({sales : {$lte : 50}})
    // let allBooks= await UserModel.find({sales : {$gte : 50}})

    // // let allBooks= await UserModel.find({$or : [{sales: {$eq: 10}}, {sales: {$eq: 82}}]}).count()
    // let allBooks= await UserModel.find({ sales: { $in: [10, 17, 82] }  }).count()
    // //sales : {$in: [10, 17, 82]}

    // let allBooks= await UserModel.find({ sales: { $nin: [10, 17, 82] }  }).select({salse: 1, _id: 0})

    // let allBooks= await UserModel.find({ $and: {salse: {$gt:  20}}, salse: {$lt: 100}}) // sales is between 20 and 100.
    
    // let allBooks= await UserModel.findById("62fbce94fce101b066f77b90")

    // // update | findByIdAndUpdate | updateOne.
    // let allBooks = await UserModel.Update(
    //     { sales: {$gt: 10}}, //condition
    //     {$set: {isPublished: true}} //the change that you want to make.
    // )


    // //REGEX
    // let allBooks = await UserModel.find({bookName: /^Int/})
    // let allBooks = await UserModel.find({bookName: /^INT/i})
    // let allBooks = await UserModel.find({bookName: /5$/})
    // let allBooks = await UserModel.find({bookName: /.*Programming.*/i })


    res.send({msg: allBooks})
}




    //=============================(17-08-2022)======================//

    const bookList = async function (req, res) {
        let bookList = await UserModel.find().select({bookName: 1, authorName: 1, _id: 0})
        res.send({msg: bookList})
    }


    //price input in body
    const getBooksInYear = async function(req, res){
        let data = praseInt(req.body)
        let getBooksInYear = await UserModel.find({year: data})
        res.send({msg: getBooksInYear})
    }



    const getParticularBooks = async function (req, res) {
        let bookList = await UserModel.find({ price: { $in: [100, 200, 500] }  })
        res.send({msg: bookList})
    }

    const  getXINRBooks = async function (req, res) {
        let bookList = await UserModel.find({
            $or: [{authorName : "Koushik mandal"}, {year : 2016}]
            })
        res.send({msg: bookList})
    }


    const  getRandomBooks = async function (req, res) {
        let bookList = await UserModel.find({price : {$gt : 500}})
        res.send({msg: bookList})
    }


    //================================================================//



module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.createBook = createBook
module.exports.getBookData = getBookData

module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks