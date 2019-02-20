/**
 * Load the required imports
 */
const
    mongoose = require('mongoose'),
    colors = require('colors');

// Define the schema
var Schema = new mongoose.Schema({
    name: String,
    age: Number
});

// Add middleware - define it before declaring the model
Schema.pre('save', function (next) {
    // Check if the record is new or not
    if (this.isNew) {
        console.log('--- New record Added ---');
    }
    next();
});

// Generate the model
// Verify that the model does not exist
var Model = mongoose.models.Person || mongoose.model('Person', Schema);

// Add new record
new Model({
    name: "UserA",
    age: 67
}).save();

// Update existing record
Model.update({
    name: "UserA"
}, {
    $set: {
        age: 1234
    }
}, function (err, status) {
    console.log(`--- Update status: ${JSON.stringify(status)}`);
});