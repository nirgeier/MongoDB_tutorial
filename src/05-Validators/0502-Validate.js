/**
 * Load the required imports
 */
const mongoose = require('mongoose');

function validateYear(value) {
    return value > 1900 && value < 2020;
}

// Define the schema
var Schema = new mongoose.Schema({
    year: {
        type: Number,
        validate: [validateYear, 'Year must be between 1900 to 2020']
    }
});

// Generate the model
// Verify that the model does not exist
var Model = mongoose.models.Years || mongoose.model('Years', Schema);

// Add new records
new Model({
    year: 2000
}).save();

new Model({
    year: 1
}).save(function (err) {
    console.log(err);
});