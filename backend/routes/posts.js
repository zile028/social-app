const {Router} = require("express");
const verifyToken = require("../middleware/verifyToken");
const router = Router();


router.post("/", verifyToken, require("../conrollers/posts/getAll"));

module.exports = router;