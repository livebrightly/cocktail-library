const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// TODO: check that embedded and referenced data are functional

const seasonsSchema = new mongoose.Schema({
    season: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const imageSchema = new Schema({
    name: String,
    desc: String,
    img: {
        data: Buffer,
        contentType: String
    }
});


const commentSchema = new Schema({
    content: String,
    rating: {
        type: Number,
        min: 1,
        max: 5,
    }
}, {
    timestamps: true
});

const drinkSchema = new mongoose.Schema({
    // num: Number,
    name: {
        type: String,
        required: true
    },
    season: {
        type: String,
        required: false,
        default: true
    },
    // season: [seasonsSchema],
    description: {
        type: String
    },
    // ingredients: {
    //     type: String,
    //     required: true
    // },
    ingredients: [{
        type: Schema.Types.ObjectId,
        ref: 'Ingredient'
    }],
    method: {
        type: String,
        default: "prep"

    },
    // image: [imageSchema],
    // comments: [commentSchema],
    rating: {
        type: {
            type: Number,
            min: 1,
            max: 5,
            default: 3
        },
    },
    hasAlcohol: {
        type: Boolean,
        required: true,
        default: true
    },
    isAdded: {
        type: Boolean,
        required: true,
        default: true
    },
    isFave: {
        type: Boolean,
        required: false,
        default: true
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Cocktail', drinkSchema);