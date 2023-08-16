const Sequelize = require('sequelize')
const connection = new Sequelize('Pedro', 'root', 'admin',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports=connection