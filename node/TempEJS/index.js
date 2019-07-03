var express = require("express");
var app = express();

app.get("/", (req,res) => {
    res.render("home.ejs");
    //res.send("<h1>Welcome to the home page!!</h1>")
})

app.get("/fallinlovewith/:thing", (req,res) => {
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
})

app.listen(8080, (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log("This server is now listening on port 8080!")
})