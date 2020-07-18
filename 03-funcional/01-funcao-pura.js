/* 
 Uma funcao pura é uma funcao em que o valor de retorno e determinado apenas 
 por seus valores de entrada, sem efeitos colaterais observaveis
 */

const PI = 3.141592;

// Funcao é impura pq o PI é um valor externo
function areaCirculoImpuro(raio) {
  return raio * raio * PI;
}

// Funcao é pura
function areaCirculoPura(raio, pi) {
  return raio * raio * pi; //Estavel
}

console.log(areaCirculoImpuro(10));
console.log(areaCirculoPura(10, 3.1415));
console.log(areaCirculoPura(10, Math.PI));
