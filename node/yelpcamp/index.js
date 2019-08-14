var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    { name: "Salmon Creek", image: "https://pixabay.com/get/57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732a7cd49f4fc750_340.jpg" },
    { name: "Granite Hill", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg" },
    { name: "Mountain ghosts", image: "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg" }
];

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req, res) => {
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", (req, res) => {
    res.render("new");
});

app.post("/campgrounds", (req, res) => {
    //get data from form and add to array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.listen(8080, (err) => {
    if(err) {
        console.log(err);
    }
    console.log("Server started successfully!");
})