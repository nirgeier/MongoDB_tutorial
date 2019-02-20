/**
 * Load the required imports
 */
const mongoose = require('mongoose');

// Connect to the DB
mongoose.connect(`mongodb://127.0.0.1`, {
  useNewUrlParser: true,
  dbName: "mongoCourse"
});

var Currency = mongoose.model('Currency', {
  "currency": String,
  "rate": Number
});

Currency.insertMany([{
    _id: mongoose.Types.ObjectId("100000000000000000000000"),
    "currency": "COP",
    "rate": 1.1
  },
  {
    _id: mongoose.Types.ObjectId("200000000000000000000000"),
    "currency": "USD",
    "rate": 3.6
  },
  {
    _id: mongoose.Types.ObjectId("300000000000000000000000"),
    "currency": "PEN",
    "rate": 6.2
  },
  {
    _id: mongoose.Types.ObjectId("400000000000000000000000"),
    "currency": "SEK",
    "rate": 1.34
  }
]);


var Payments = mongoose.model('Payments', {
  "bank_account": Number,
  "currency": {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Currency"
  }
});

Payments.insertMany([{
    "bank_account": 1111,
    "currency": mongoose.Types.ObjectId("100000000000000000000000")
  },
  {
    "bank_account": 2222,
    "currency": mongoose.Types.ObjectId("200000000000000000000000")
  },
  {
    "bank_account": 3333,
    "currency": mongoose.Types.ObjectId("300000000000000000000000")
  }, {
    "bank_account": 4444,
    "currency": mongoose.Types.ObjectId("400000000000000000000000")
  }
], function (err, records) {

  // Populate = get the sub document data using the field values
  Payments.find({}).
  populate("currency").
  exec(function (err, data) {
    console.log('The currency is %s', data);
  });
});

setTimeout(process.exit, 5000);