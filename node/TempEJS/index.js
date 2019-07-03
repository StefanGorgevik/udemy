var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.render("home");
    //res.send("<h1>Welcome to the home page!!</h1>")
})

app.get("/fallinlovewith/:thing", (req,res) => {
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
})

app.get("/posts", (req, res) => {
    var posts = [
        {title: "Post 1", author: "Stefan" },
        {title: "Can you believe this happened?", author: "Mike" },
        {title: "The meaning of life!", author: "John" }
    ];
    res.render("posts", {posts: posts});
})

app.listen(8080, (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log("This server is now listening on port 8080!")
})