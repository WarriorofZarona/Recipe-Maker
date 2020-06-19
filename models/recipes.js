const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    steps: {
        type: Schema.Types.Mixed,
        require: true
    }
})

const Recipe = mongoose.model("Recipe", recipeSchema)

module.exports = Recipe;