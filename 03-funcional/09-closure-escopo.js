// Closure e quando uma funcao lembra
// seu escopo lexico, mesmo quando funcoes nessa
// linguageme executado fora desse escopo lexico

const x = 3;

function fora() {
  const x = 97;
  function somarXMais3() {
    return x + 3;
  }

  return somarXMais3;
}

module.exports = fora();
