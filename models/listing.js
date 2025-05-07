const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/warm-lighting-illuminates-a-modern-reading-space-CIIflD2YaKY",
        set :(v) => v ==="" 
        ? "https://unsplash.com/photos/warm-lighting-illuminates-a-modern-reading-space-CIIflD2YaKY" : v,
    },    
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;