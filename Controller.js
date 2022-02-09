const express = require("express");
const cors = require("cors");

const models = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

let cliente = models.Cliente;
let itempedido = models.ItemPedido;
let pedido = models.Pedido;
let servico = models.Servico;

app.get("/", function(req, res) {
    res.send("Olá, Mundo!");
});

app.post("/servicos", async(req, res) => {
    await servico.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "O serviço foi criado com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Foi impossível se conectar."
        })
    });
});

app.post("/clientes", async(req, res) => {
    await cliente.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Cliente cadastrado com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Foi impossível se conectar, tente novamente."
        })
    });
});

app.post("/pedidos", async(req, res) => {
    await pedido.create(
        req.body        
    ).then(function(){
        return res.json({
            error: false,
            message: "Pedido realizado com sucesso!"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Foi impossível se conectar, tente novamente."
        })
    });
});

let port = process.env.port || 3001;

app.listen(port, (req, res) => {
    console.log(`Servidor Ativo: http://localhost:3001`);
});