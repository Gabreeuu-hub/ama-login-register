// Dependencias 

const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

// Ligar o server e checar se está rodando localhost:3002 

app.listen(3002, ()=>{
    console.log('Server está rodando na porta 3002')
})

// Database (mysql)

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '', // SENHA
    database: 'amaloginregisterdb',
})

// Rota criada para o server

app.post('/register' ,(req, res)=>{
    // É preciso de variáveis para serem enviadas para o form
    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password

    // Crie uma instrução SQL para inserir o usuário na tabela do banco de dados Usuários
    const SQL = 'INSERT INTO Users (email, username, password) VALUES (?,?,?)'
    // Vamos inserir esses valores através de uma variável
    const Values = [sentEmail, sentUserName, sentPassword]
    // Query para executar a instrução SQL indicada acima
    db.query(SQL, Values, (err, results)=>{
       if(err){
        res.send(err)
       } 
       else{
        console.log('Usuário inserido com sucesso!')
        res.send({message: 'Usuário adicionado!'})
       }
    })

})

// É necessário logarmos com as credenciais que foram registradas no User
// Isso é feito criando uma outra route

app.post('/Login', (req, res)=>{
      // É preciso de variáveis para serem enviadas para o form
      const sentLoginEmail = req.body.LoginEmail
      const sentLoginPassword = req.body.LoginPassword
  
      // Crie uma instrução SQL para inserir o usuário na tabela do banco de dados Usuários
      const SQL = 'SELECT * FROM users WHERE email = ? && password = ?'
      // Vamos inserir esses valores através de uma variável
      const Values = [sentLoginEmail, sentLoginPassword]

      db.query(SQL, Values, (err, results)=>{
        if(err){
            res.send({error: err})
        }
        if(results.length >0){
            res.send(results)
        }
        else{
            res.send({message: 'As credenciais não condizem!'})
        }
     })
 
 })