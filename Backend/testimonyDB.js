const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/portfoliodb")
const schema = mongoose.Schema

var testimonial = schema({
 name:String,
 company:String,
 testimony:String,
 imageURL:String
})

var Testimonial = mongoose.model("testimonials",testimonial)

module.exports = Testimonial