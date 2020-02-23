const express = require('express')

const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })


const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

const scoreboardRouter = require("./routes/scoreboard")

app.use('/scoreboard', scoreboardRouter)

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, "client/public/index.html"), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })


app.listen(port, () => {
    console.log(`Server is running on port:  ${port}`)
})