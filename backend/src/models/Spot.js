const mongoose = require('mongoose');

//esquema que o Spot vai ter ( tipos de campos)
const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

});

//cria a model Spot a partir do UserSchema acima
module.exports = mongoose.model('Spot', SpotSchema);