const {Router} = require("express");
const verifyToken = require("../middleware/verifyToken");
const router = Router();


router.get("/", verifyToken, require("../conrollers/posts/getAll"));

module.exports = router;