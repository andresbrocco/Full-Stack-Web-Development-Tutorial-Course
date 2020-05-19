var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var ingredients = [
	{
		id: "1",
		text: "Eggs"
	},
	{
		id: "2",
		text: "Milk"
	},
	{
		id: "3",
		text: "Bacon"
	},
	{
		id: "4",
		text: "Frog Legs"
	}
];

app.get("/ingredients", function(request, response) {
	response.send(ingredients);
});

app.post("/ingredients", function(request, response) {
	var ingredient = request.body;
	if (!ingredient || ingredient.text === "") {
		response.status(500).send({ error: "Your ingredient must have text" });
	} else {
		ingredients.push(ingredient);
		response.status(200).send(ingredients);
	}
});

app.put("/ingredients/:ingredientId", function(request, response) {
	var newText = request.body.text;
	if (!newText || newText === "") {
		response.status(500).send({ error: "You must provide a text" });
	} else {
		var objectFound = false;
		for (let index = 0; index < ingredients.length; index++) {
			var ing = ingredients[index];
			if (ing.id === request.params.ingredientId) {
				ingredients[index].text = newText;
				objectFound = true;
				break;
			}
		}
		if (!objectFound) {
			response.status(500).send("You  must provide a valid id");
		} else {
			response.status(200).send(ingredients);
		}
	}
});

app.listen(3000, function() {
	console.log("First API running on port 3000!");
});
