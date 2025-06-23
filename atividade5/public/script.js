document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('agendamentoForm');
    const mensagem = document.getElementById('mensagem');

    // Máscaras para CPF, Telefone e CEP
    document.getElementById('cpf').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        e.target.value = value;
    });

    document.getElementById('telefone').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 2) {
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        }
        if (value.length > 10) {
            value = value.replace(/(\d{5})(\d)/, '$1-$2');
        } else if (value.length > 6) {
            value = value.replace(/(\d{4})(\d)/, '$1-$2');
        }
        e.target.value = value;
    });

    document.getElementById('cep').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 5) {
            value = value.replace(/^(\d{5})(\d)/, '$1-$2');
        }
        e.target.value = value;
    });

    // Buscar endereço via CEP (simplificado)
    document.getElementById('cep').addEventListener('blur', function(e) {
        const cep = e.target.value.replace(/\D/g, '');
        if (cep.length === 8) {
            // Simulação de busca de CEP
            setTimeout(() => {
                document.getElementById('endereco').value = 'Rua Exemplo, 123 - Centro - Cidade/UF';
            }, 500);
        }
    });

    // Envio do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar data futura
        const dataHora = new Date(document.getElementById('dataHora').value);
        const agora = new Date();
        if (dataHora <= agora) {
            mostrarMensagem('Por favor, selecione uma data e hora futuras.', false);
            return;
        }

        // Coletar dados do formulário
        const formData = new FormData(form);
        const dados = Object.fromEntries(formData.entries());

        // Enviar para o servidor (simulado)
        fetch('/agendar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                mostrarMensagem('Agendamento realizado com sucesso!', true);
                form.reset();
            } else {
                mostrarMensagem('Erro ao agendar. Por favor, tente novamente.', false);
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            mostrarMensagem('Erro ao conectar com o servidor.', false);
        });
    });

    function mostrarMensagem(texto, sucesso) {
        mensagem.textContent = texto;
        mensagem.className = sucesso ? 'success' : 'error';
        setTimeout(() => {
            mensagem.style.display = 'none';
        }, 5000);
    }
});