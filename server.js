//create engine here

const express = require("express")

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.static("public"));

app.use(express.urlencoded({ extended:true}));

app.use(express.json())


const handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars")


const routes = require("./controllers/burgerController.js")

app.use(routes)

app.listen(PORT, function() {
    console.log("server listening on: http://localhost" + PORT);
})