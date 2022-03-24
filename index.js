const express = require("express")
const app = express()
const {engine}  = require('express-handlebars')
const Sequelize = require("sequelize")


app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

/* conexão com o banco*/
const sequelize = new Sequelize('teste', 'root', '123456', {
  host: "localhost",
  dialect: 'mysql'
})

/* rotas */
app.get('/add', (req, res) => {
  res.render('../../formulario')
})
 
app.listen(8081, function (){
  console.log("servidor rodando");
});
