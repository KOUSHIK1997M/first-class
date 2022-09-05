const express = require('express');
const router = express.Router();
const AuthorController= require("../controllers/authorController")
const blogController= require("../controllers/blogController")
// const mild = require("../midil/emailCheck")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/authors", AuthorController.createAuthor  )//mild.mild1,

router.post("/blogs", blogController.createBlog )
router.get("/blogs", blogController.findBlogs)
router.get("/blogs:id", blogController.findQuery)

// router.post("/createBooks", bookController.createBooks  )

// router.get("/getAllBooks", bookController.getAllBooks)

// router.put("/updateBooks", bookController.updateBooks)

module.exports = router;
