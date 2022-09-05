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

// Find blogs

const findBlogs = async function(req, res){
    try{
        const data = await blogModel.find({isDeleted: false, isPublished: true}) //
        if(!data) res.status(404).send({status: flase ,msg: "Data is not found."})
        else res.status(200).send({status: true, data: data})
    }catch(error){
        res.status(500).send({status: flase , msg: error.message})
    }
}


// find blogs data by query params

const findQuery = async function(req, res){
    try{
        let data = req.query.authorId;
        let data1 = req.query.category;
        let data2 = req.query.tags;
        const tagsdata = await blogModel.tags.filter(data2)
        const newData = await blogModel.filter({authorId: data, category: data1, isDeleted: false, isPublished: true,
        // tags: 
        })
        if(!newData) res.status(400).send({status: false, msg: "Data not find"})
        else res.status(200).send({status: true, data: newData})
    }catch(error){
        res.status(500).send({status: flase, msg: error.message})
    }

}

module.exports.createBlog = createBlog
module.exports.findBlogs = findBlogs
module.exports.findQuery = findQuery

