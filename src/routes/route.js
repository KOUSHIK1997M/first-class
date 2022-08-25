const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const OrderController= require("../controllers/orderkController")
const ProductController= require("../controllers/productController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//Create products
router.post("/createProduct", ProductController.createProduct )

//create User
router.post("/createUser", commonMW.midil1, UserController.createUser ) 

//create Order
router.post("/createOrder", commonMW.midil1, commonMW.midil2 ,OrderController.createOrder )


module.exports = router;