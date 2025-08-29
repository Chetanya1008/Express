// Library v/s Framework

//Library - A library is a collection of pre-written code that can be used to perform specific tasks.
//eg: axios

//Framework - A framework is a set of pre-written code that provides a structure for developing software applications.
//eg : express


//Express
//A Node.js web application framwework that helps us to make web applications.
// It is used for server side programming.

//Express is used for:
// 1. listen for incoming request
// 2. parse
// 3. match response with routes
// 4. response


//Getting Started with Express
// const express = require("express");
// const app = express();

// let port = 3000;

// app.listen(port, () => {
//     console.log(`app listening on port ${port}`);
// });


//Ports are the logical endpoints of a network connection that is used to exchange information between a web server and a web client.


//Handling requests
//Sendig a response
// Sends the HTTP response.

// The body parameter can be a Buffer object, a String, an object, Boolean, or an Array.
//app.use

// app.use((req, res) => {
//     console.log("request received");
//     // res.send("This is the basic response");
//     res.send({
//         name : "Apple",
//         color : "red"
//     })
// });


//Routing - It is process of selectig a path for traffic in a network or between or across multiple networks.

// const express = require("express");
// const app = express();

// let port = 3000;

// app.listen(port, () => {
//     console.log(`app listening on port ${port}`);
// });

// app.get("/apple", (req, res) => {
//     res.send({
//         name: "apple",
//         color: "red", 
//     });
// });

// app.get("/orange", (req, res) => {
//     res.send({
//         name: "orange",
//         color: "orange", 
//     });
// });

// app.get("/mango", (req, res) => {
//     console.log(req.url);
//         res.send({
//         name: "mango",
//         color: "yellow", 
//     });
// }); 

// app.get("/", (req, res) => {
//     res.send("aapne root path ko contact kara hai");
// }); 
// app.post("/", (req, res) => {
//     res.send("You sent a post request to root");
// }); 

// app.use((req, res) => {
//     res.status(404).send('Sorry, we cannot find that!');
// }); 



//Nodemon
//To automatically restart server with code changes



//Path Parameters

//req.params

// const express = require("express");
// const app = express();

// let port = 3000;

// app.listen(port, () => {
//     console.log(`app listening on port ${port}`);
// });

// app.get("/user/:username/id/:userId", (req, res) => {
//     console.log(req.params);
//     let { username, userId } = req.params;
//     let htmlStr = `<h1>This account belongs to @${username} and their id is ${userId}</h1>`
//     res.send(htmlStr);
// });

// app.get("/search", (req, res) => {
//     console.log(req.query);
//     let { q, page } = req.query;
//     let htmlStr = `<h1>Searching for: ${q}, Page: ${page}</h1>`
//     res.send(htmlStr);
// });  



//Templating
//EJS(Embedded JavaScript templates)
// EJS is a simple templating language that lets you generate HTML markup with plan JavaScript.


//Using EJS

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//     res.render("home.ejs");
// })


//Views Directory

// const path = require("path");

// app.set("views", path.join(__dirname, "/views"));


//Interpolation Syntax

//Interpolation refers to embedding expressions into marked up text.

//WE USE <%=....%> this tag to achieve interpolation.
// <%=..%> Outputs the value into the template (HTML escaped).
//The code we write in these tags, their output will be in the form of a string.
//There are multiple tags as well you can check that on ejs.co website.


//Passing data to EJS

// app.get("/rolldice", (req, res) => {
//     let num = Math.floor(Math.random() * 6) + 1;
//     res.render("rollDice.ejs", { diceVal: num });
// });


//INSTAGRAM EJS
//Create a basic template for instagram page based on following route:

//   /ig/:username


//Conditional Statements in EJS
//Adding conditions inside EJS

// <% if(diceValue == 6) {
// %> <h2> Nice! Roll dice again. <h2>
// <% } %>

//WE USE 'SCRIPTLET' tag for contro -flow, no output.


//Loops in EJS


/* 
<% for(users of followers) { %>
<li><%= user %></li>
<% } %> 
*/


//Instagram page with EJS

//const instaData = require("./data.json");




//Serving Static Files

/* 
app.use( express.static( folder_name) )

app.use(express.static(path.join(__dirname, "public")));
*/



//Includes

// <%- include("includes/head.ejs"); %>