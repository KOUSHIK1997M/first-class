const { check } = require("express-validator");
const jwt = require("jsonwebtoken");
const userModel = require("../modles/userModel");


///User create.............

const createUser = async function (req, res) {
  let data = req.body;
  try {
    let userEmail = data.emailId
    if (!userEmail) {
      res.status(400).send({ status: false, msg: "Data missing please enter curect data." })
    } else {
      let userExistence = await userModel.findOne({ emailId: userEmail })
      if (!userExistence) {
        let savedData = await userModel.create(data);
        res.status(200).send({ status: true, msg: "User successfully created.", data: savedData })
      } else {
        res.status(404).send({ status: false, msg: "User alredy exist in this email id." })
      }
    }
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }
};


/// User Login.............................

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;
    if (!userName && !password) {
      res.status(400).send({ status: false, msg: "Data missing please enter curect data." })
    } else {
      let user = await userModel.findOne({ emailId: userName, password: password });
      if (!user) {
        res.status(404).send({ status: false, msg: "Invalide User and password..!!" })
      } else {
        let token = jwt.sign(
          {
            userId: user._id.toString(),
            batch: "thorium",
            organisation: "FunctionUp",
          },
          "functionup-plutonium-very-very-secret-key"
        );
        res.setHeader("x-auth-token", token);
        res.send({ status: true, msg: "You are successfully  login.", token: token });

      }
    }
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }

};



////  Get user Data.....................

const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails) {
      res.status(400).send({ status: false, msg: "No such user exists" });
    } else {
      res.status(200).send({ status: true, data: userDetails });
    }
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }

};

//// Update User data ..............................

const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails) {
      res.status(400).send({ status: false, msg: "No such user exists" });
    } else {
      let userData = req.body;
      let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
      res.status(200).send({ status: true, data: updatedUser });
    }

  } catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }

};


//// DELETE  api......data..........................


const userDeleted = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails) {
      res.status(400).send({ status: false, msg: "No such user exists" });
    } else {
      let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } });
      res.status(200).send({ status: true, data: updatedUser });
    }
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }
}





module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.userDeleted = userDeleted;