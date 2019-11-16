const mongoose = require('mongoose');

//esquema que o usuario vai ter ( tipos de campos)
const UserSchema = new mongoose.Schema({
    email: String,
})

//cria a model User a partir do UserSchema acima
module.exports = mongoose.model('User', UserSchema);