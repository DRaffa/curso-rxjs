const { from, Observable } = require('rxjs');

function primeiro() {
  return function (source) {
    return Observable.create((subscriber) => {
      source.subscribe({
        next(v) {
          subscriber.next(v + 1000);
          subscriber.complete();
        },
      });
    });
  };
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
    // primeiro(),
    nenhum()
    // ultimo()
  )
  .subscribe(console.log);
