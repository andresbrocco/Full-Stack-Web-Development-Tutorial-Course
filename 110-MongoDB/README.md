# MongoDB

## Installation of MongoDB Community Edition

```shell
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
sudo apt-get update
sudo apt-get install -y mongodb-org
```

## Create a folder to save the database

For example: <project-dir>/data/db

## Start the server

mongod --dbpath <project-dir>/data/db

## Acessing db through terminal

Open another terminal and run 'mongo'

```mongodb
show dbs
use 'db-name'
db.collectionName.insert({"key":"string value", "key2":booleanValue, "key3":floatValue})
show collections
db.collectionName.find().pretty()
db.collectionName.find({"key"="something"})
db.collectionName.update({search criteria}, {\$set:{key and values to update}})
db.collectionName.remove({search criteria})
db.collectionName.remove({search criteria},{justOne: true})
```

## Using mongoose as a object modeling for mongodb

For each collectionName, create a .js file with its schema and make it available
using module.exports. For example, inside the collectionName.js:

```javascript
var mongoose = require('mongoose');
var collectionSchema = new mongoose.Schema({
	prop1: String,
	prop2: [type: String, type: String, type: Float]
	prop3: {type: Number, required: true},
	prop4: {type: Boolean, default: true}
});
module.exports = mongoose.model('CollectionName', collectionSchema);
```

In the server.js, connect to the database and require collections:

```javascript
var mongoose = require('mongoose');
mongoose.connect(mongodb://localhost/db-name);
var collectionName1 = require('path/to/collectionName1');
var collectionName2 = require('path/to/collectionName2');
```

To insert new items (for example after receiving a post request):

```javascript
var item = new CollectionName();
item.prop = (...);
item.prop2 = (...);
(...)
item.save(function(err, savedItem) {
	if (err) {
		// Do something
	} else {
		// Do something
	}
})
```
