const Sequelize = require("sequelize")

const connection = new Sequelize('projetoblog', 'root', 'Leandro14',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
})

module.exports = connection