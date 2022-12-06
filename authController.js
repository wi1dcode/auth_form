const User = require("./models/User")
const Role = require("./models/Role")
const bcrypt = require("bcryptjs")

class authController {
  async signup(req, res) {
    try {
      // destruct
      const { username, password } = req.body
      // find user in db, if not continue
      const candidate = await User.findOne({ username })
      if (candidate) {
        return res.status(400).json({ message: "Already registered" })
      }
      // hash password
      const hashPassword = bcrypt.hashSync(password, 7)
      // find user role
      const userRole = await Role.findOne({ value: "User" })
      // create user with hash password and user role
      const user = new User({
        username,
        password: hashPassword,
        roles: [userRole.value],
      })
      // save data to db
      await user.save()
      // send message
      return res.json({ message: "Registered" })
    } catch (e) {
      console.log(e)
      res.status(400).json({ message: "Registration error" })
    }
  }
  async signin(req, res) {
    try {
    } catch (e) {
      console.log(e)
      res.status(400).json({ message: "Login error" })
    }
  }
  async getUsers(req, res) {
    try {
      // --- FOR CREATE MODEL IN DATABASE ---
      // const userRole = new Role()
      // const adminRole = new Role({ value: "Admin" })
      // await userRole.save()
      // await adminRole.save()
      res.json("getusers: server work")
    } catch (e) {}
  }
}

module.exports = new authController()
