var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.get("/", (req, res) => {
    res.render("home");
})

app.get("/friends", (req, res) => {

    res.render("friends", {friends:friends});
})

app.post("/addFriend", (req,res) => {
    var newFriend = req.body.newfriend;  //object that contain the data in the req.body
    friends.push(newFriend);
    res.redirect("/friends");
});
app.listen(8080, (err) => {
    if(err) {
        console.log(err);
    }
    console.log("Server is started and listening on port 8080");
})