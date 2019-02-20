/**
 * Load the required imports
 */
const Users = require('../../models/users');

console.log('Adding test records to users'.yellow);
// Multiple records
Users.bulkWrite([{
        insertOne: {
            document: {
                firstName: "First bulk",
                lastName: "Last",
                age: -1
            }
        }
    },
    {
        updateOne: {
            filter: {
                firstName: "First bulk"
            },
            // If you were using the MongoDB driver directly, you'd need to do
            // `update: { $set: { title: ... } }` but mongoose adds $set for you.
            update: {
                firstName: "First bulk -- updated --"
            }
        }
    },
    {
        deleteOne: {
            filter: {
                age: -1
            }
        }
    }
]).then(res => {
    console.log(`Number of added records: ${res.insertedCount}`);
    console.log(`Number of modified records: ${res.modifiedCount}`);
    console.log(`Number of deleted records: ${res.deletedCount}`);
    process.exit();
});