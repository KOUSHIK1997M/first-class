const authorModel= require("../models/authorModel")
const blogModel = require("../models/blogModel")
// var ObjectId = require('mongodb').ObjectID

// Blogs post api

const  createBlog = async function(req, res){
    try{
        let data = req.body;
        let objectid = data.authorId;
        let newData = await authorModel.findById(objectid)
        // res.send(newData)
        if(!newData){
            res.status(400).send({status: flase, msg: "Invalid author Id"})
        }else{
            let savedData= await blogModel.create(data)
            res.status(201).send({status: true, data: savedData})
        }

    }catch(error){
        res.status(500).send({status: flase, msg: error.message})
    }
}


// find blogs data by query params

const findQuery = async function(req, res){
    try{
        let data = req.query
        const newData = await blogModel.find(data)
        if(!newData){
            res.status(400).send({status: false, msg: "Data not find"})
        }else {
            res.status(200).send({status: true, data: newData})
        }
    }catch(error){
        res.status(500).send({status: false, msg: error.message})
    }

}

module.exports.createBlog = createBlog
module.exports.findQuery = findQuery

