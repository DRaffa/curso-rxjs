const { Observable, noop } = require('rxjs');

const obs = Observable.create((subscriber) => {
  subscriber.next('Rxjs');
  subscriber.next('é');
  subscriber.next('bem');
  subscriber.next('poderoso!');

  if (Math.random() > 0.5) {
    subscriber.complete();
  } else {
    subscriber.error('Que problema?');
  }
});

// obs.subscribe(
//   (valor) => console.log(`Valor: ${valor}`),
//   //Nao tratar o erro
//   noop,
//   // Tratar o erro
//   // (erro) => console.log(`Valor: ${erro}`),
//   () => console.log('Fim!')
// );

// Passando um objeto no subscriber
// Vantagem que vc pode implementar na ordem que vc quer
// Respeitando o nome das propriedades "next", "error", "complete"
obs.subscribe({
  next(valor) {
    console.log(`Valor: ${valor}`);
  },
  error(msg) {
    console.log(`Erro: ${msg}`);
  },
  complete() {
    console.log('Fim');
  },
});
