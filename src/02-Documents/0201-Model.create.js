/**
 * Load the required imports
 */
const Users = require('../../models/users');

console.log('Adding test records to users'.yellow);

// Using create
Users.create({
    firstName: "First 2",
    lastName: "Last 2",
    age: 99
}, function (err, record) {
    // Error handling
    if (err) {
        return handleError(err);
    }
    console.log('Record added using Users.create: ', record);
    process.exit();
});