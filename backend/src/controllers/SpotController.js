//metodos possiveis no controler
//index - retorna a listagem de sessões
//show - retorna uma unica sessão
//store - criar uma sessão
//update - çterar sessão
//destroy - destruir sessão

//req.query = Acessar query params ( para filtros)
//req.params = Acessar route params ( para edição, delete)
//req.body = Acessar corpo da requisição ( para criação e edição)


const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = {
    //lista os spots
    async index(req, res) {
       const { tech } = req.query;
       
       //busca no banco as tecnologias conforme o campo techs da model
       const spots = await Spot.find({ techs: tech });
      
      return res.json(spots);
    },

    async store(req, res) {
        //salva o nome do arquivo no BD ( passado na req )
        //mais as informações
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        //verifica o usuario pelo id se há erro
        const user = await User.findById(user_id);
        if (!user) {
            return res.status(400).json({ error: 'User does not exists' });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        return res.json(spot)
    }
};