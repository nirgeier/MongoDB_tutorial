// aggregation docs:
// https://docs.mongodb.com/manual/reference/operator/aggregation/

/**
 * Load the required imports
 */
const mongoose = require('mongoose');

// Connect to the DB
mongoose.connect(`mongodb://127.0.0.1`, {
    useNewUrlParser: true,
    dbName: "mongoCourse"
});

var Food = mongoose.model('Food', {
    "food": String,
    "price": mongoose.Schema.Types.Decimal
});

Food.deleteMany({}, function () {

    Food.insertMany([{
                "food": "Pizza",
                "price": 4.55
            },
            {
                "food": "Pizza",
                "price": 5.45
            }, {
                "food": "Salad",
                "price": 1.7
            }, {
                "food": "Salad",
                "price": 8.00
            }, {
                "food": "Toast",
                "price": 3.0
            }
        ],
        function () {
            // Find all records
            Food.aggregate([{
                        $match: {} // The filters to collect the record
                    },
                    {
                        $group: { // The field which we will group by
                            _id: "$food",
                            price: { // The aggregate function, in this case sum
                                $sum: "$price"
                            }
                        }
                    }
                ],
                function (err, records) {
                    console.log(`Users.aggregate("lastName") -> ${JSON.stringify(records, null,2)}`);
                    process.exit();
                });
        });
});