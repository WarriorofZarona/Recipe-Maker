const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: Schema.Types.Array,
        required: true
    },
    steps: {
        type: Map,
        of: String,
        required: true
    },
    media: String,
    Timer: Number
})

const Recipe = mongoose.model("Recipe", recipeSchema)

module.exports = Recipe;