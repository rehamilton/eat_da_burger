//create engine here

const express = require("express")

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.static("public"));


app.use(express.urlencoded({ extended:true}));

app.use(express.json())

//use handlebars
const handlebars = require("express-handlebars");
//define defaults for handlebars
app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars")

//look for routes file
const routes = require("./controllers/burgerController.js")
//use routes
app.use(routes)

app.listen(PORT, function() {
    console.log("server listening on: http://localhost" + PORT);
})