/**
 * Load the required imports
 */
const Users = require('../../models/users');

Users.insertMany([{
        "lastName": "A"
    },
    {
        "lastName": "B"
    }, {
        "lastName": "C"
    }, {
        "lastName": "A"
    }, {
        "lastName": "A"
    }
]);

// Find all records
Users.distinct("lastName",
    function (err, records) {
        console.log(`Users.distinct("lastName") -> ${records}`);
        process.exit();
    });