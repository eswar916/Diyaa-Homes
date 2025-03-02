const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;


app.set("view engine", "ejs");


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


const home1 = ["Luxury homes", 3050, "4bhk residential",'images/lux1.jpeg', 'images/lux2.jpeg','images/lux3.jpeg', 'images/lux4.jpeg'];
const home2 = ["Modern homes", 2750, "3bhk residential",'images/mod1.jpeg', 'images/mod2.jpeg','images/mod3.jpeg', 'images/mod4.jpeg'];
const home3 = ["Pakka homes", 2270, "2bhk residential", 'images/ren1.jpeg', 'images/ren2.jpeg','images/ren3.jpeg', 'images/ren4.jpeg'];

const format1 = {};
format1.home1 = home1;
format1.home2 = home2;
format1.home3 = home3;


app.get("/", (req, res) => {
    res.render("index");
});

app.get("/lux", (req, res) => {
    res.render("ind", { data: format1.home1 });
});

app.get("/mod", (req, res) => {
    res.render("ind", { data: format1.home2 });
});

app.get("/ren", (req, res) => {
    res.render("ind", { data: format1.home3 });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
