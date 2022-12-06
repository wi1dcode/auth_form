const express = require("express")
const mongoose = require("mongoose")
const authRouter = require("./authRouter")
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use("/auth", authRouter)

// Connecting mongoDB 

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://wilder:wcs-3@autch.jhdjxro.mongodb.net/?retryWrites=true&w=majority`
    )
    app.listen(PORT, () => {
      console.log(`server startet on ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
