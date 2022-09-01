
const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/CowinController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.get("/cowin/states", CowinController.getState)
router.get("/cowin/diswtrictInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getByOtp)

router.get("/getTemCities", CowinController.getTemCities)
router.post("/apiData", CowinController.medHandler)

module.exports = router;

