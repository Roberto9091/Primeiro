const endereco = "mongdb://localhoust:27017/loja"
const mongoose = require('mongoose')

mongoose.connect(endereco, { useNewUrParser: true})
mongoose.set('useFindAndModify', false)

module.exports = mongoose