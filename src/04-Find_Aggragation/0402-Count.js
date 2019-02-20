/**
 * Load the required imports
 */
const Users = require('../../models/users');

// Find all records
Users.find({}, function (err, records) {
    console.log(`Users.find({}) -> Found ${records.length} records`);
});

//
// OR  
// 
Users.countDocuments({},
    function (err, count) {
        console.log("Number of users:", count);
    });

//
// OR  
// 
Users.count({
        age: 100
    },
    function (err, count) {
        console.log("Number of users (age;100):", count);
        process.exit();
    });