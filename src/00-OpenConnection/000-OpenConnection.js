/**
 * Load all files in this folder.
 * This is only for the demo purposes
 */
const mongoose = require('mongoose');

// Connect to the DB
mongoose.connect(`mongodb://127.0.0.1`, {
    useNewUrlParser: true,
    dbName: "mongoCourse"
});