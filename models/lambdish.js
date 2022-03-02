const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Country = new Schema(
    {
        country_name: { type: String, require: true},
        capital: { type: String, require: true},
    },
    { timestamps: true},
);

const Recipe = new Schema(
    {
        dish_name: { type: String, require: true },
        ingredients: { type: String, require: true },
        country_origin: Country ,
        image: { type: String, require: true},
    },
    { timestamps: true},
)

module.exports = mongoose.model('recipes', Recipe);
