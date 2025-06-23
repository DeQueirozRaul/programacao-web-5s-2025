const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para processar o agendamento (simulado)
app.post('/agendar', (req, res) => {
    console.log('Dados recebidos:', req.body);
    // Aqui você normalmente salvaria no banco de dados
    res.json({ success: true, message: 'Agendamento realizado com sucesso!' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});