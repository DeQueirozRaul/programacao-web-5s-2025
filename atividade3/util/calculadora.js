const express = require('express');
const calculadora = require('./util/calculadora');
const app = express();
const PORT = 8080;

app.get('/somar/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.somar(a, b);
    res.send(`Resultado: ${resultado}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.subtrair(a, b);
    res.send(`Resultado: ${resultado}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.multiplicar(a, b);
    res.send(`Resultado: ${resultado}`);
});

app.get('/dividir/:a/:b', (req, res) => {
    try {
        const a = parseFloat(req.params.a);
        const b = parseFloat(req.params.b);
        const resultado = calculadora.dividir(a, b);
        res.send(`Resultado: ${resultado}`);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});