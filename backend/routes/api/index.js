const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const { setTokenCookie } = require("../../utils/auth");
const { User } = require("../../db/models");
const sessionRouter = require("./session");
const usersRouter = require("./users");

router.use("/session", sessionRouter);
router.use("/users", usersRouter);

// router.post("/test", function (req, res) {
//     res.json({ requestBody: req.body });
// });

module.exports = router;
