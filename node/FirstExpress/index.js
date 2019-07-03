var http = require("http");
var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.send("Hi there!");
});

app.get("/bye", (req, res) => {
    res.send("Goodbye!");
});

app.get("/dog", (req, res) => {
    res.send("MEOW!");
});

app.get("/books/:number/:title", (req,res) => {
    res.send("Book number is " + req.params.number + " and the title is " + req.params.title);
});

app.get("*", (req,res) => {
    res.send("Star! You have a error!")
});

app.listen(8080, (err) => {
    if(err){
        console.log(err);
    }
    console.log("server started successfully!");
});

