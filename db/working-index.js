var MongoClient = require('mongodb').MongoClient;

const mongodb = process.env.MONGODB_URI

MongoClient.connect(
    mongodb,
  {
    tlsCAFile: `./rds-combined-ca-bundle.pem`,
  },
  function (err, client) {
    if (err) throw err;

    //Specify the database to be used
    db = client.db('TestDatabase');

    //Specify the collection to be used
    col = db.collection('tests');

    //Insert a single document
    col.insertOne({ test: 'Amazon DocumentDB 2' }, function (err, result) {
      //Find the document that was previously written
    //   col.findOne({ hello: 'DocDB;' }, function (err, result) {
    //     //Print the result to the screen
    //     console.log(result);

    //     //Close the connection
    //     client.close();
    //   });
    });
  }
);