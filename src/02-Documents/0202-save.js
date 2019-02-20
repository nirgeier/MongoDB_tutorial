/**
 * Load the required imports
 */
const
    mongoose = require('mongoose'),
    Users = require('../../models/users');

console.log('Adding test records to users');

// Using save
new Users({
    firstName: "First",
    lastName: "Last",
    age: -1
}).save(function (err, record) {
    console.log('Record added using save: ', record);
});

// The _id is single String of 12 bytes or a string of 24 hex characters
new Users({
    _id: mongoose.Types.ObjectId("000000000000000000000000"),
    firstName: "First",
    lastName: "Last",
    age: -1
}).save(function (err, record) {
    console.log('Record added with _id: ', arguments);
    process.exit();
});