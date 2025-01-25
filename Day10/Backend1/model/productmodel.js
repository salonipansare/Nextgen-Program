const mongoose = require('mongoose')

const Productschema = new mongoose.Schema(
    {
        title:String ,
        price:Number,
        image:String 

    }
)

const Productmodel = mongoose.model("productdata", Productschema);
module.exports = Productmodel