const Sequelize = require('sequelize')
const connection = require('./database.js')

const Resposta = connection.define('Resposta',{
    Corpo:{
    type: Sequelize.TEXT,
    allownull: false
    },
    PerguntaId:{
        type: Sequelize.INTEGER,
    allownull: false
    },
    criadorId:{
        type: Sequelize.INTEGER,
    allownull: false
    },
    criadorNome:{
        type: Sequelize.STRING,
    allownull: false
    }
})
Resposta.sync({force: false}).then(() => {
    console.log("tabela criada")
})

module.exports=Resposta