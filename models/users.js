/**
 * Load the required imports
 */
const mongoose = require('mongoose')

// Connect to the DB
mongoose.connect(`mongodb://127.0.0.1`, {
    useNewUrlParser: true,
    dbName: "mongoCourse"
});

console.log(`modles/users.js - Define user schema`);

/**
 * Define users schema
 */

// Mongoose provides all the CRUD methods :
//    Schema.create
//    Schema.update
//    Schema.remove
//    Schema.find
//
//  on the model.

// Define the schema
var schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
});

// Generate the model
// Verify that the model does not exist
var Model = mongoose.models.Users || mongoose.model('Users', schema);

// NodeJs.
module.exports = Model;