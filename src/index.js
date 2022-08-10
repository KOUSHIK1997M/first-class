const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

//================================(09-08-2022)=============================================//

//====>Question_1.

app.get("/sol1", function(req, res){
    let arr = [1,2,3,4,5,7,8,9];
    let total = 0;
    for(var i in arr){
        total = total +arr[i];
    }
    let lastDigit = arr.pop();
    let consecutiveSum = lastDigit*(lastDigit+1)/2;
    let missingNumber = consecutiveSum - total;

    res.send({data: missingNumber});
    console.log({data: missingNumber});
})


//===>Question_2.

app.get("/sol2", function(req, res){
    let arr =[33, 34, 35, 37, 38, 39, 40];
    let len = arr.length;
    let total = 0;
    for(var i in arr){
        total = total + arr[i];
    }
    let firstDigit = arr[0]
    let lastDigit = arr.pop();
    let consecutiveSum = (len + 1)*(firstDigit + lastDigit)/2;
    let missingNumber = consecutiveSum - total;

    res.send({data: missingNumber});
    console.log({data: missingNumber});

})
 

//================================(09-08-2022)=============================================//





app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
