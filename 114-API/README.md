# API - Application Programming Interface

## Setup node in the project directory

```shell
npm init
npm install --save <npm-package-name> <npm-package-name1> <npm-package-name1>
npm install --save body-parser express mongoose
```

## Create server.js

Use express as the web framework.
Use body-parser as a middleware to expose the request body as a property.
Create CRUD operations: Create, Retrieve, Update, Delete. (GET, POST, PUT,
DELETE and PATCH).

```javascript
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/db-name");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {});
app.post("/", function(req, res) {});
app.put("/", function(req, res) {});
app.delete("/", function(req, res) {});
app.patch("/", function(req, res) {});

app.listen(portNumber, function() {
	console.log("server running on port portNumber!");
});
```

## Run server that watches for changes on files

```shell
sudo npm install -g nodemon
nodemon server.js
```
