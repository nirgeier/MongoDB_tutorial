/**
 * Load the required imports
 */
const
    mongoose = require('mongoose');

var breakfastSchema = new mongoose.Schema({
    eggs: {
        type: Number,
        min: [6, 'Too few eggs'],
        max: [12, 'Death wish?']
    },
    cheese: {
        type: Number,
        required: [true, 'Why no cheese?']
    },
    drink: {
        type: String,
        enum: ['Coffee', 'Tea'],
        required: function () {
            return drink > 2;
        }
    }
});
var Breakfast = mongoose.model('Breakfast', breakfastSchema);

// New 
var badBreakfast = new Breakfast({
    eggs: 2,
    bacon: 0,
    drink: 'Milk'
});

var validation = badBreakfast.validateSync();

console.log(Object.keys(validation.errors));
console.log(validation.errors);