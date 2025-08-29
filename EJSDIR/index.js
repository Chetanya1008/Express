const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// app.use(express.static("public"));

app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/hello", (req, res) => {
    res.send("hello");
})

// app.get("/rolldice", (req, res) => {
//     let num = Math.floor(Math.random() * 6) + 1;
//     res.render("rollDice.ejs", { diceVal: num });
// });

app.get("/rolldice", (req, res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {
        diceValue});
})


app.get("/ig/:username", (req, res) => {   
    let { username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    console.log(instaData);
    if(data){
        res.render("instagram", { data });
    } else{
        res.render("error.ejs")
    }
    
});