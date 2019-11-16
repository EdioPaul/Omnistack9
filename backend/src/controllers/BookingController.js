//metodos possiveis no controler
//index - retorna a listagem de sessões
//show - retorna uma unica sessão
//store - criar uma sessão
//update - çterar sessão
//destroy - destruir sessão

//req.query = Acessar query params ( para filtros)
//req.params = Acessar route params ( para edição, delete)
//req.body = Acessar corpo da requisição ( para criação e edição)
const Booking = require('../models/Booking');

module.exports = {
    async store(req, res) {
        //busca o usuario que esta fazendo a reserva
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,

        });

        //retorna todas as informações do usuario e do spot
        await booking.populate('spot').populate('user').execPopulate();

        return res.json(booking);
    }
};