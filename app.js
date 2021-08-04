// initializes express app
const express = require("express")
const app = express()

//using express-static middleware
app.use(express.static("public"))

// define first route
app.get("/", function (req, res) {
    res.send("<h1>QQ TEST<h1>")
})

// starts listening to request from server
app.listen(process.env.PORT || 3000,
    () => console.log("Server currently running..."))
