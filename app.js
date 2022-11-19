const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public/"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
	res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
	res.send("Thank you for Subscribing");
	console.log(req.body);
});

app.listen(3000, () => {
	console.log("server is running on port 3000");
});
