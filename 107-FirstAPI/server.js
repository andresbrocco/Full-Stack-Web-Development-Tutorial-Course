var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var ingredients = [
	{
		id: "232kAk",
		text: "Eggs"
	},
	{
		id: "dkP345",
		text: "Milk"
	},
	{
		id: "dkgjdksl",
		text: "Bacon"
	},
	{
		id: "32hf0",
		text: "Frog Legs"
	}
];

app.get("/", function(request, response) {
	response.send(ingredients);
});

app.get("/dir", function(request, response) {
	response.send("Where are you going?!");
});

app.listen(3000, function() {
	console.log("First API running on port 3000!");
});
