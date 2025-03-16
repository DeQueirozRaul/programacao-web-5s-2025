//Funcão
function transporMatriz(A) {
    // Imprimir a matriz original
    console.log("Matriz Original:");
    for (let i = 0; i < A.length; i++) {
      console.log(A[i]);
    }
  
    // Criar a matriz transposta
    const linhas = A.length;
    const colunas = A[0].length;
    const At = [];
  
    for (let j = 0; j < colunas; j++) {
      At[j] = [];
      for (let i = 0; i < linhas; i++) {
        At[j][i] = A[i][j];
      }
    }
  
    // Imprimir a matriz transposta
    console.log("\nMatriz Transposta:");
    for (let j = 0; j < colunas; j++) {
      console.log(At[j]);
    }
  }
  
  // Matriz
  const matriz = [
    [1, 2,],
    [3, 4,],
    [5, 6]
  ];
  
  transporMatriz(matriz);
