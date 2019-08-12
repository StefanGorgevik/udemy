//http://www.omdbapi.com/?s=star/&apikey=thewdb
//                 you need this/
var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("search");
})

app.get("/results", (req, res) => {
    var query = req.query.search;  //taken from the form /input, where name is search
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
    request(url, (err, response, body) => {
        if(!err & response.statusCode == 200) {
            var data = JSON.parse(body);
            //res.send(results.Search[0].Title);
            //res.send(results["Search"][0]["Title"]);
            res.render("results", {data: data});
        }    
})
})


app.listen(8080, function() {
    console.log(`Movie app has started!`);
})