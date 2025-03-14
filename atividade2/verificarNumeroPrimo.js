function verificarNumeroPrimo(n) {
    // Números menores ou iguais a 1 não são primos
    if (n <= 1) return false;
    // 2 e 3 são primos
    if (n <= 3) return true;
    // Números divisíveis por 2 ou 3 não são primos
    if (n % 2 === 0 || n % 3 === 0) return false;
    // Verifica divisibilidade a partir de 5 até a raiz quadrada de n
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

// Lista de números a serem verificados
const numeros = [0, 1, 2, 3, 7, 83, 100, 991, 104729, 14348907];

// Percorre a lista e verifica se cada número é primo
for (let numero of numeros) {
    if (verificarNumeroPrimo(numero)) {
        console.log(`O número ${numero} é primo.`);
    } else {
        console.log(`O número ${numero} não é primo.`);
    }
}
