const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const BookModel= require("../models/bookModel.js")
const UserController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", UserController.createAuthor  )

router.post("/createBooks", UserController.createBooks  )

router.get("/authorBookList", UserController.authorBookList)

router.post("/authorBookUpdate", UserController.authorBookUpdate )

router.get("/authorBookLists", UserController.authorBookLists)




module.exports = router;
