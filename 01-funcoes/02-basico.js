function bomDia() {
  console.log('Bom dia');
}

// Funcao anonima é uma funcao sem nome
const boaTarde = function () {
  console.log('Boa tarde');
};

function executarQualquerCoisa(fn) {
  // typeof para obter o tipo de informacao do parametro
  if (typeof fn === 'function') {
    fn();
  }
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

// 2) Retornar uma funcao a partir de uma outra funcao

function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));

const potenciaDe3 = potencia(3)(4);
console.log(potenciaDe3);
