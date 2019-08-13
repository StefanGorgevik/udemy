var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.send("This will be the landing page soon!");
})

app.listen(8080, (err) => {
    if(err) {
        console.log(err);
    }
    console.log("Server started successfully!");
    
})