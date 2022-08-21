const express = require('express');
const router = express.Router();
const AuthorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publicController= require("../controllers/publisherController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createAuthor", AuthorController.createAuthor  )

router.post("/createPublisher", publicController.createPublisher  )

router.post("/createBooks", bookController.createBooks  )

router.get("/getAllBooks", bookController.getAllBooks)

router.put("/updateBooks", bookController.updateBooks)

module.exports = router;
