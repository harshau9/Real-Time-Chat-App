const express = require("express");
const router = express.Router();
const {registerUser, loginUser,allUsers} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");


router.route("/").post(registerUser)
router.post("/login", loginUser);
router.route("/").get(protect,allUsers) // it has to go through the middleware before it gets to all the users request

module.exports = router;