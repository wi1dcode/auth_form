const Router = require("express")
const router = new Router()
const controller = require("./authController")

// Routes

router.post("/signup", controller.signup)
router.post("/signin", controller.signin)
router.get("/users", controller.getUsers)

module.exports = router
