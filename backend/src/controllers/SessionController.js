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

//criando uma sessão
module.exports = {
    async store(req, res) {  //declara sem assincrona
        //pega o email de dentro do corpo da requisição
        const { email } = req.body;

        //verifica se o usuario já existe antes de criar
        let user = await User.findOne({ email });

        if (!user) {
            //informações para criar o usuario, no caso somente email
            user = await User.create({ email }) //aguarda para prosseguir somente após criar no banco

        }

        return res.json(user);
    }
};

