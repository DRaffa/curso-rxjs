function somar(valor1) {
  return function (valor2) {
    return function (valor3) {
      return valor1 + valor2 + valor3;
    };
  };
}

const resultadoSoma = somar(3)(4)(5);
console.log(resultadoSoma);

const multiplicar = function (valor1, valor2) {
  return valor1 * valor2;
};

function calcular(valor1) {
  return function (valor2) {
    return function (fn) {
      return fn(valor1, valor2);
    };
  };
}

const resultadoMultiplicado = calcular(3)(2)(multiplicar);

console.log(resultadoMultiplicado);

/*
11 975094474
Olá, gostaria de encomendar um "Caseirinho de Raffaello"
Olá, gostaria de saber mais sobre as encomendas de bolo
*/
