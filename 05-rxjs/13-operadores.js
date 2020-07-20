const { from, Observable } = require('rxjs');

// function createPeipeableOperator(nextFn) {
//   return function (source) {
//     return Observable.create((subscriber) => {
//       source.subscribe({
//         next(valor) {
//           nextFn(subscriber, valor);
//         },
//       });
//     });
//   };
// }

// function primeiro() {
//   return createPeipeableOperator((subscriber, valor) => {
//     subscriber.next(valor);
//     subscriber.complete();
//   });
// }

function createPeipeableOperator(nextGenerator) {
  return function (source) {
    return Observable.create((subscriber) => {
      source.subscribe({
        next: nextGenerator(subscriber),
      });
    });
  };
}

function primeiro() {
  return createPeipeableOperator(function (subscriber) {
    return function (valor) {
      subscriber.next(valor);
      subscriber.complete();
    };
  });
}

function nenhum() {
  return function (source) {
    return Observable.create((subscriber) => {
      source.subscribe({
        next(v) {
          subscriber.complete();
        },
      });
    });
  };
}

function ultimo() {
  return function (source) {
    return Observable.create((subscriber) => {
      let ultimoValor;
      source.subscribe({
        next(v) {
          ultimoValor = v;
        },
        complete() {
          if (ultimoValor != undefined) {
            subscriber.next(ultimoValor);
          }
          subscriber.complete();
        },
      });
    });
  };
}

// from([1, 2, 3, 4, 5]).pipe(primeiro()).subscribe(console.log);
from([1, 2, 3, 4, 5])
  .pipe(
    primeiro()
    // nenhum()
    // ultimo()
  )
  .subscribe(console.log);
