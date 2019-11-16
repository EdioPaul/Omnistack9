//metodos possiveis no controler
//index - retorna a listagem de sessões
//show - retorna uma unica sessão
//store - criar uma sessão
//update - çterar sessão
//destroy - destruir sessão

//req.query = Acessar query params ( para filtros)
//req.params = Acessar route params ( para edição, delete)
//req.body = Acessar corpo da requisição ( para criação e edição)
const Spot = require('../models/Spot');

module.exports = {
    async show(req, res) {
        const { user_id } = req.headers;

        //pega todos os spots que o campo user é igual user_id que vem através do cabeçalho
        const spots = await Spot.find({ user: user_id });

        return res.json(spots);
    }
}