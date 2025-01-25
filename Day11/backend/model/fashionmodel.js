const mongoose = require('mongoose')

const Fashionschema = new mongoose.Schema(
    {
        "image":"String",
        "name":"String",
        "price":"Number"
        
    }
)

const Fashionmodel = mongoose.model("fashiondata", Fashionschema);
module.exports = Fashionmodel 