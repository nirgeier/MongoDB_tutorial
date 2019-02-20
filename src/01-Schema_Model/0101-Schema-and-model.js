/**
 * Load the required imports
 */
const mongoose = require('mongoose');

/**
 * Define users schema
 */

// Define the schema
var schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number
});

// Generate the model
var Model = mongoose.model('Users', schema);

// NodeJs.
module.exports = Model;