const calc = require('./util/calculadora');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let html = '<h1>Calculadora</h1>';
    html += '<h3>Rotas:</h3>';
    html += '<p>/somar/:a/:b <a href="/somar/10/5">Exemplo</a></p>';
    html += '<p>/subtrair/:a/:b <a href="/subtrair/10/5">Exemplo</a></p>';
    html += '<p>/multiplicar/:a/:b <a href="/multiplicar/10/5">Exemplo</a></p>';
    html += '<p>/dividir/:a/:b <a href="/dividir/10/5">Exemplo</a></p>';
    res.send(html);
});

app.get('/somar/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.send(`${a} + ${b} = ${calc.somar(a, b)}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.send(`${a} - ${b} = ${calc.subtrair(a, b)}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.send(`${a} × ${b} = ${calc.multiplicar(a, b)}`);
});

app.get('/dividir/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.send(`${a} ÷ ${b} = ${calc.dividir(a, b)}`);
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});