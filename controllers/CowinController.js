let axios = require('axios');



let getState = async function (req, res){
  try {
    let options = {
      method: "GET",
      url: "https://cdndemo-api.co-vin.in/api/v2/admin/location/states"
    }
    let result = await axios(options)
    res.status(200).send({ msg: result.data, status: true})
  }catch (error){
    console.log(error.message)
    res.status(500).send({msg: error.message})
  }
}



let getDistricts = async function (req, res) {
  try {
    let id = req.params.stateId;
    let options = {
      method: "GET",
      url: `https://cdndemo-api.co-vin.in/api/v2/admin/location/districts/${id}`
    } 
    let result = await axios(options)
    res.status(200).send({ msg: result.data, status: true})
  }catch(error) {
    console.log(error.message)
    res.status(500).send({msg: error.message})
  }
}


//>>>>>>>>>>>>>>>>>>>>>(1)


let getByPin = async function (req, res){
  try{
    let pin = req.query.pincode;
    let date = req.query.date;
    let options = {
      method: "GET",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
    }
    let result = await axios(options)
    console.log(result.data)
    res.status(200).send({ msg: result.data})
  }catch(error){
    res.status(500).send({msg: error.message})
  }
}



let getByOtp = async function (req, res){
  try{
    let otp = req.body;
    let options = {
      method: "POST",
      url: "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",
      data: otp
    }
    let result = await axios(options)
    res.status(200).send({ msg: result.data})
  }catch (error){
    res.status(500).send({msg: error.message})
  }
}

////  >>>>>>>>>>>>>>>>(2)

let getTemCities = async function (req, res){
  try {
    let cities =  [ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] 
    let TemCities = []
    for(let i = 0; i < cities.length; i++){
      let obj = { city: cities[i]}
      let datas = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=5cb17549190d68ab4b68000c69d57108`)
      obj.temp =datas.data.main.temp
      TemCities.push(obj) 
    }
    let sorted = TemCities.sort( function(a, b) {return a.temp - b.temp})
    res.status(200).send({status: true, msg: sorted})
  }catch (error) {
    console.log(error);
    res.status(500).send({msg: error.message})
  }

}


//>>>>>>>>>>>>>>>>>(3)

let medHandler = async function (req, res){
  try{
    let meme_Id = req.query.template
    let text0 = req.query.text1
    let text1 = req.query.text2
    let options = {
      method: "POST",
      url: `https://api.imgflip.com/caption_image?template_id=${meme_Id}&text1=${text0}&text2=${text1}&username=KOUSHIK1997$password=Koushik1997@`
    }
    let result = await axios(options)
    res.status(200).send({status: true, msg: result})
  }catch(error){
    console.log(error)
    res.status(500).send({msg: error.message})
  }
}



module.exports.getState = getState;
module.exports.getDistricts = getDistricts;
module.exports.getByPin = getByPin;
module.exports.getByOtp = getByOtp;
module.exports.getTemCities = getTemCities
module.exports.medHandler = medHandler