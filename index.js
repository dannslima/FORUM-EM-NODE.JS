const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')



// CONFIG
    // TEMPLATE ENGINE
        app.engine('handlebars', handlebars({defaultLayout:'main'}))
        app.set('view engine' ,'handlebars')

    // CONEXAO COM BANCO DE DADOS MYSQL
        const sequelize = new Sequelize('node','root','toor', {
            host:"localhost",
            dialect: "mysql"
        })

// ROTAS
        app.get('/cad', function(req,res){
            res.render('formulario')
        })

app.listen(8081, function(){
    console.log("servidor rodando url http://localhost:8081")
})        