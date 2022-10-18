const mongoose = require("mongoose");
const Test = require("../models/Test");

const { getFile } = require('../s3')

const MONGO_URI = process.env.MONGODB_URI   

console.log('test');

// getFile('rds-combined-ca-bundle.pem')
// .then(file => {
//     console.log(file);
// })

mongoose
    .connect(MONGO_URI,
        {
            tlsCAFile: `./rds-combined-ca-bundle.pem`,
        }
    )
    .then(() => {
        Test.create({
            test: "Hallo Jonas 4"
        })
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err);
    })


