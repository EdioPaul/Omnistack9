const mongoose = require('mongoose');

//esquema que o Booking vai ter ( tipos de campos)
const BookingSchema = new mongoose.Schema({
   date: String,
   approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }

});

//cria a model Booking a partir do UserSchema acima
module.exports = mongoose.model('Booking', BookingSchema);