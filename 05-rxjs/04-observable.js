const { Observable } = require('rxjs');

const promise = new Promise((resolve) => {
  // resolve só envia uma vez
  resolve('Promise é bem legal!');
});

promise.then(console.log);

const obs = new Observable((subscriber) => {
  subscriber.next('Observer');
  subscriber.next('é');
  subscriber.next('bem');
  setTimeout(() => {
    subscriber.next('legal!');
    //Quando se usa complete nao vai mais ser gerado novos valores
    subscriber.complete();
  }, 1000);
});

obs.subscribe(console.log);

obs.subscribe((texto) => console.log(texto.toUpperCase()));
