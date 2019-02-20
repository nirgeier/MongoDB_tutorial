/**
 * Load the required imports
 */
const Users = require('../../models/users');

console.log('Adding test records to users'.yellow);
// Multiple records
Users.insertMany([{
        firstName: "Multiple 1",
        lastName: "Multiple 1",
        age: 99
    }, {
        firstName: "Multiple 2",
        lastName: "Multiple 2",
        age: 99
    },
    {
        firstName: "Multiple 3",
        lastName: "Multiple 3",
        age: 99
    }
], function (err, record) {
    // Error handling
    if (err) {
        return handleError(err);
    }
    console.log('Record added using insertMany: ', record);
    process.exit();
});