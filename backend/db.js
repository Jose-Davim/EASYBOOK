const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://scorpsgama:Beep4682e@testprojeto.g9tyb.mongodb.net/Projeto', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro na conexão MongoDB:', err));

module.exports = mongoose;
