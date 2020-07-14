const cors = require('cors')
const express = require('express')
// const stripe = require("stripe")("")
const uuid = require("uuid")
const app = express();

//middleware
app.use(express.json())
app.use(cors())

//routes
app.get("/", (req, res) => {
    res.send("Sucessfully working")
})

//listen
app.listen(8282, () => { console.log("Listening at port 8282") })