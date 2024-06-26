const {Router} = require("express");
const router = Router();

router.post("/login", require("../conrollers/auth/login"));
router.post("/register", require("../conrollers/auth/register"));

module.exports = router;