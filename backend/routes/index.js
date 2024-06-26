const {Router} = require("express");
const router = Router();

router.use("/auth", require("./auth"));
router.use("/posts", require("./posts"));

module.exports = router;