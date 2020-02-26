const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://edio:3d10@cluster0-512sp.mongodb.net/omnistack9?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors());
//informa ao express que serão utilizadas requisições do tipo json
app.use(express.json());
app.use(routes);


app.listen(3333);