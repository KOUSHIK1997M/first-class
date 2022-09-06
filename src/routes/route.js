const express = require('express');
const router = express.Router();
const AuthorController= require("../controllers/authorController")
const blogController= require("../controllers/blogController")
const mild = require("../midil/emailCheck")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/authors", AuthorController.createAuthor  )//mild.mild1,

router.post("/blogs",mild.mild1, blogController.createBlog )
router.get("/blogs", blogController.findQuery)



module.exports = router;
