const multer = require('multer');
const path = require('path');

//salva as imagens em disco na aplicação ( diskstorage )
//path.resolve para correção de barras conforme sistema operacional
module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            //cria nome e extensão da imagem
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            cb(null, `${name}-${Date.now()}${ext}`);
        },
    }),
};