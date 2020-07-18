function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve();
    }, tempo);
  });
}

// esperarPor(2000)
//   .then(() => console.log('Executando promisse 1...'))
//   .then(esperarPor)
//   .then(() => console.log('Executando promisse 2...'))
//   .then(esperarPor)
//   .then(() => console.log('Executando promisse 3...'));

function retornarValor() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000);
  });
}

async function executar() {
  let valor = await retornarValor();

  await esperarPor(2000);
  console.log(`Async Await Executando promisse ${valor}...`);
  await esperarPor(2000);
  console.log(`Async Await Executando promisse ${valor + 1}...`);
  await esperarPor(2000);
  console.log(`Async Await Executando promisse ${valor + 2}...`);

  return valor + 3;
}

// Nao consegue capturar o valor do executar pq a promise ainda nao acabou
// const v = executar();
// console.log(v);

// executar().then((valor) => {
//   console.log(valor);
// });s

async function obterValorDeVerdade() {
  const valor = await executar();
  console.log(valor);
}

obterValorDeVerdade();
