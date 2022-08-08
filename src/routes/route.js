const express = require('express');

const abc = require("../introduction/intro");
const xyz = require("../logger/logger")
const pqr = require("../util/helper")
const stv = require("../validator/formatter")
const mnp = require("../lodash/lodash")

const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('My batch is ', abc.name)
    abc.func1()
    
    // xyz.welcome()
    // pqr.printDate()
    // pqr.printMonth()
    // pqr.getBatchInfo()
    // stv.trim()
    // stv.toLowerCase()
    // stv.toUpperCase()
    mnp.chunk()
    mnp.tail()
    mnp.union()
    mnp.fromPairs()
    res.send("My second ever api!")
});

router.get('/cohort-member', function(req, res){
    let students = ['shabir','pritam','koushik']
    res.send(students);
});

// router.get('/student-details/shabir', function(req, res){
//     console.log('hello i am shabir')
//     res.send("hey")
// })

router.get('/student-details/:name', function(req, res){
    console.log('This is the request'+JSON.stringify(req.params))
    let reqParams = req.params
    let studentsName = reqParams.name
    console.log('Name of the student is ', studentsName);
    res.send(studentsName)
})

router.get("./test-you",function (req, res){
    res.send("This is the second routes implementation")
});

router.get("/give-me-students-data",function(req, res){

});

module.exports = router;
// adding this comment for no reason