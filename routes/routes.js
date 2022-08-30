
const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const authtest = require("../middleware/auth");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", authtest.auth ,userController.getUserData)

router.put("/users/:userId", authtest.auth ,userController.updateUser)

router.delete("/users/:userId", authtest.auth ,userController.userDeleted )




module.exports = router;

