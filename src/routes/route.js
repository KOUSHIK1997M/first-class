const express = require('express');

const abc = require("../introduction/intro");
const xyz = require("../logger/logger")
const pqr = require("../util/helper")
const stv = require("../validator/formatter")
const mnp = require("../lodash/lodash");
const { isInteger } = require('lodash');
const { application } = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('My batch is ', abc.name)
    // abc.func1()
    // xyz.welcome()
    // pqr.printDate()
    // pqr.printMonth()
    // pqr.getBatchInfo()
    // stv.trim()
    // stv.toLowerCase()
    // stv.toUpperCase()
    // mnp.chunk()
    // mnp.tail()
    // mnp.union()
    // mnp.fromPairs()
    res.send("My second ever api!")
});

//=============(08-08-2022)========================================//

// router.get('/cohort-member', function(req, res){
//     let students = ['shabir','pritam','koushik']
//     res.send(students);
// });

// router.get('/student-details/shabir', function(req, res){
//     console.log('hello i am shabir')
//     res.send("hey")
// })

// router.get('/student-details/:name', function(req, res){
//     console.log('This is the request'+JSON.stringify(req.params))
//     let reqParams = req.params
//     let studentsName = reqParams.name
//     console.log('Name of the student is ', studentsName);
//     res.send(studentsName)
// })

///=======================(09-08-2022)=========================================================///

//====> Question_1.

router.get('/GET/movies', function(req, res){
    let movie = ['Udaan','Guilty','Badla','Dear Zindsgi','Uri','Black Friday','RRR']
    console.log(movie);
    res.send(movie);
})


//====> Question_2.

router.get('/GET/movies/:indexNumber', function(req, res){
    console.log('This is the request'+JSON.stringify(req.params))
    let movie1 = ['Udaan','Guilty','Badla','Dear Zindsgi','Uri','Black Friday','RRR']
    let request1 = req.params;
    let request2 = parseInt(request1.indexNumber);
    let request3 = movie1[request2]
    console.log(request3);
    res.send(request3); 
})


//====> Question_3.

router.get('/GET/movies/:indexNumber', function(req, res) {
    console.log('This is the request'+JSON.stringify(req.params))
    let movie2 = ['Udaan','Guilty','Badla','Dear Zindsgi','Uri','Black Friday','RRR']
    let requ1 = req.params;
    let requ2 = parseInt(requ1.indexNumber);
    if (requ2 < movie2.length & requ2 >= 0){
        let requ3 =movie2[requ2]
        console.log(requ3);
        res.send(requ3);
    }else{
        let mss = 'Oops!!  Use a valid index?'
        console.log(mss);
        res.send(mss);
    }
})


//======> Question_4.

router.get('/GET/films', function(req, res){
    let arr = [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       console.log(arr);
       res.send(arr);
       
})


//===>Question_5.

router.get('/GET/films/:filmId', function(req, res){
    console.log('This is the request'+JSON.stringify(req.params))
    let arr1 = [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       let reqs1 = req.params;
       let reqs2 = parseInt(reqs1.filmId);
       let count = 0;
       for(i = 0; i < arr1.length; i++){
        if(reqs2 == i+1){
            let reqs3 = arr1[i]
            console.log(reqs3);
            res.send(reqs3);
        }else{
            count++
        }
    }
    if(count == arr1.length){
        console.log('No movie exists with this id')
        res.send('No movie exists with this id')
    }
})


//================================(11-08-2022)=============================================//

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]



router.post("/players", function(req, res){
    let count = 0;
    let arr = req.body;
    let arr1 = arr['name']
    for( let i = 0; i < players.length; i++){
        if(players[i]["name"] != arr1){
            count = count + 1;
        }
    }
    if(count < players.length){
        res.send("Oops!! ...Data already existst!!!")
    }else if(count == players.length){
        players.push(arr);
        res.send({ data: players , status: true }  );
    }
})



//==================================(12-08-2022)===========================================//

var persons =[
    {
        name: "PK",
        age: 10,
        votingStatus: false
    },
    {
        name: "SK",
        age: 20,
        votingStatus: false
    },
    {
        name: "AA",
        age: 70,
        votingStatus: false
    },
    {
        name: "SC",
        age: 5,
        votingStatus: false
    },
    {
        name: "HO",
        age: 40,
        votingStatus: false
    }
    

]


router.post("/persons", function(req, res){
    let n1 = req.body;
    let n = n1['age'];
    let arr = [];
    for(let i = 0; i < persons.length; i++){
        let m = persons[i]['age'];
        if(parseInt(m) > parseInt(n)){
            persons[i]['votingStatus'] = true;
            let a = persons[i];
            arr.push(a);
        }
    }
    res.send(arr);
})

//=============================================================================//


router.get("./test-you",function (req, res){
    res.send("This is the second routes implementation")
});

router.get("/give-me-students-data",function(req, res){

});

module.exports = router;
// adding this comment for no reason