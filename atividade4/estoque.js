const estoque = [];

function adicionarProduto(id, nome, qtd) {
    if (estoque.some(p => p.id === id)) {
        throw new Error("ID já existe");
    }
    estoque.push({ 
        id: id.toString(),
        nome: nome.trim(),
        qtd: Math.max(0, parseInt(qtd))
    });
}

function listarProdutos() {
    return estoque;
}

function removerProduto(id) {
    const index = estoque.findIndex(p => p.id === id);
    if (index !== -1) {
        return estoque.splice(index, 1)[0];
    }
    return null;
}

function editarProduto(id, novaQtd) {
    const produto = estoque.find(p => p.id === id);
    if (produto) {
        produto.qtd = Math.max(0, parseInt(novaQtd));
        return true;
    }
    return false;
}

module.exports = { adicionarProduto, listarProdutos, removerProduto, editarProduto };