/**
 * Load the required imports
 */
const Users = require('../../models/users');

// Find all records
Users.find({}, function (err, records) {
    console.log(`Users.find({}) -> Found ${records.length} records`);
});

// Find Specific record records
Users.create({
    age: 100
}, function (err, record) {
    console.log(`Record added: ${record}`);

    // The operation are async so the find is in the callback
    Users.find({
        age: 100
    }, function (err, records) {
        console.log(`Users.find({  age: 100 }) -> Found ${records.length} records`);
    });

    // The operation are async so the find is in the callback
    Users.findOne({
        age: 100
    }, function (err, records) {
        console.log(`Users.findOne({  age: 100 }) -> Found the first record ${records}`);
        process.exit();
    });

});