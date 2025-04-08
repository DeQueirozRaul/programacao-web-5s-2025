const express = require('express');
const { adicionarProduto, listarProdutos, removerProduto, editarProduto } = require('./estoque');

const app = express();
const PORT = 8080;

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    try {
        const { id, nome, qtd } = req.params;
        
        if (!id || !nome || !qtd) {
            throw new Error("Todos os parâmetros são obrigatórios");
        }

        if (isNaN(qtd) || parseInt(qtd) <= 0) {
            throw new Error("Quantidade deve ser um número positivo");
        }

        adicionarProduto(id, nome, parseInt(qtd));
        res.status(201).json({ 
            success: true,
            message: `Produto '${nome}' adicionado com sucesso!`
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Erro ao adicionar produto",
            error: error.message
        });
    }
});

app.get('/listar', (req, res) => {
    res.json(listarProdutos());
});

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    const produtoRemovido = removerProduto(id);
    if (!produtoRemovido) {
        return res.status(404).json({ error: "Produto não encontrado" });
    }
    res.json({ message: `Produto ${id} removido!`, produto: produtoRemovido });
});

app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    if (isNaN(qtd)) {
        return res.status(400).json({ error: "Quantidade inválida" });
    }
    if (!editarProduto(id, parseInt(qtd))) {
        return res.status(404).json({ error: "Produto não encontrado" });
    }
    res.json({ message: `Quantidade do produto ${id} atualizada!` });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});