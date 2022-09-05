const express = require('express');
const router = express.Router();
const emailValidator = require('deep-email-validator');
const authorModel= require("../models/authorModel")
//=========================================================//


const createAuthor= async function (req, res) {
    try {
        let data= req.body
        let email = data.email
        async function isEmailValid(email) {
            return emailValidator.validate(email)
        }
        const {valid, reason, validators} = await isEmailValid(email);
        if(valid){
            let savedData= await authorModel.create(data)
            res.status(201).send({status: true, data: savedData})
        }else{
            res.status(404).send({status: false, msg: "Invalid email."})
        }

    }catch (error){
        res.status(500).send({status: false, msg: error.message})
    }
}

//=========================================================//



module.exports.createAuthor = createAuthor