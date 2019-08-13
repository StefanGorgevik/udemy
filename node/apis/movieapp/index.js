//http://www.omdbapi.com/?s=star/&apikey=thewdb
//                 you need this/
var express = require("express");
var app = express();
var request = require("request");
var rp = require("request-promise") //used to make your request similar to promises

app.set("view engine", "ejs");

//as a main route you have the search input, where the 
//search content is taken as a query and used below
app.get("/search", (req, res) => {
    res.render("search");
})

// app.get("/results", (req, res) => {
//     var query = req.query.search;  //taken from the form /input, where name is search
//     var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
//     request(url, (err, response, body) => {
//         if(!err & response.statusCode == 200) {
//             var data = JSON.parse(body);
//             //res.send(results.Search[0].Title);
//             //res.send(results["Search"][0]["Title"]);
//             res.render("results", {data: data});
//         }    
// })
// })

app.get("/results", (req, res) => {
    var query = req.query.search;  //taken from the form /input, where name is search
    rp("http://www.omdbapi.com/?s=" + query + "&apikey=thewdb")
    .then((content)=> {
        var data = JSON.parse(content);
        res.render("results", {data:data});
    })
    .catch((err) => {
        console.log(err);
    }) 
})

app.listen(8080, function() {
    console.log(`Movie app has started!`);
})