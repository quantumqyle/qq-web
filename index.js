// initializes express app
const express = require("express");
const app = express();
const path = require("path");

//using express-static middleware
app.use(express.static("public"));

//Routes Definitions
// define first route
app.get("/", (req, res) => {
    res.render("index", { title: "Home"});
});
// starts listening to request from server
app.listen(process.env.PORT || 3000,
    () => console.log("Server currently running..."));

// App Config
/* assigning a setting name to a value
views tells express the correct source of view template files */
app.set("views", path.join(__dirname, "views"))
// tells expess the correct template
app.set("view engine", "pug");
//mount express.statis() middleware
app.use(express.static(path.join(__dirname, "public")));

