// Funcao impura pq trabalha com uma informacao aleatoria
function gerarNumeroAleatorio(min, max) {
  const fator = max - min + 1;

  return parseInt(Math.random() * fator) + min;
}

console.log(gerarNumeroAleatorio(1, 1000));
console.log(gerarNumeroAleatorio(1, 1000));
console.log(gerarNumeroAleatorio(1, 1000));
console.log(gerarNumeroAleatorio(1, 1000));
