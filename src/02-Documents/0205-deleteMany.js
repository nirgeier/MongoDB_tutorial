/**
 * Load the required imports
 */
const
    mongoose = require('mongoose'),
    Users = require('../../models/users');

console.log('Removing all records from users');

Users.deleteMany({}, function (err, summary) {
    console.log(summary);
    process.exit();
})