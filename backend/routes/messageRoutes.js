const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const { allMessages, sendMessage } = require("../controllers/messageControllers");



const router = express.Router();
//fetch all msgs from a chat
router.route("/:chatId").get(protect, allMessages);
// sending the msg
router.route("/").post(protect, sendMessage);

module.exports = router;