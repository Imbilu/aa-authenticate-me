const express = require("express");
const asyncHandler = require("express-async-handler");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const User = require("../../db/models/user");

const router = express.Router();

router.post("/", (req, res, next) => {
    User.logi;
});
module.exports = router;
