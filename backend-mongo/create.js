var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("datawarehouse");
  dbo.createCollection("contacts", function(err, res) {
    if (err) throw err;
    console.log("Collection Contacts created!");
  });
  dbo.createCollection("countries", function(err, res) {
    if (err) throw err;
    console.log("Collection Country created!");
  });
  dbo.createCollection("business", function(err, res) {
    if (err) throw err;
    console.log("Collection Company created!");
  });
  dbo.createCollection("channels", function(err, res) {
    if (err) throw err;
    console.log("Collection Channel created!");
    db.close()
  });
});