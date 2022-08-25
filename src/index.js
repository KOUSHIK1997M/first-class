const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Soma20_DB:ENGDAnWXed1GQmeB@cluster0.ildaoen.mongodb.net/Database_2?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



app.use('/', route);


// app.use (
//     function(req, res, next){
//         let h_data= req.headers.isfreeappuser
//         if(!(h_data)){
//             res.send({status: 404, msg: "Data is missing a mandatory header!"})
//         }else{
//             next()
//         }
//     }
    
// );

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         res.send({msg:"done"})
//   }
//   );


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
