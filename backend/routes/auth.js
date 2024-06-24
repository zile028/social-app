const {Router} = require("express")
const router = Router()
// http://localhost:4000/api
router.post("/login",require("../conrollers/auth/login"))

module.exports = router