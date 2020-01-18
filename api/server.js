// Declara
const express = require('express')
const bodyParser = require('body-parser')

// Instancia do Expess
const app = express()

// Adicionando bodeParser ao express
app.use(bodyParser.json())

// Configurar a porta do API
const port = 3000
app.listen(port, function(){
    console.log(`Api rodando na porta ${port}!`)
})


/*cria uma rota
app.use("/", function(req, res){
    return res.send("Chamou a rota raiz da API")
    //let saida = "Chamou a rota raiz da API"
    //console.log(saida);
    //res.send(saida)  
}) */

app.post("/media", function (req, res){
    let idade1 = parseFloat(req.body.idade1) 
    let idade2 = parseFloat(req.body.idade2)
    let media = (idade1 + idade2) / 2
    let obj = {
        media: media
    }

    res.send(obj)
})