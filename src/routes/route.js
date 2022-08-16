const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", UserController.createBook  )

router.get("/getBooksData", UserController.getBookData)

//=======================(17-08-2022)=================================//

router.get("/bookList", UserController.bookList)

router.post("/getBooksInYear", UserController.getBooksInYear)

router.get("/getParticularBooks", UserController.getParticularBooks)

router.get("/getXINRBooks", UserController.getXINRBooks)

router.get("/getRandomBooks", UserController.getRandomBooks)




module.exports = router;
