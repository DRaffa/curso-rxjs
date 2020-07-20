const { from, Observable } = require('rxjs');

function createPeipeableOperator(operatorFn) {
  return function (source) {
    return Observable.create((subscriber) => {
      const sub = operatorFn(subscriber);
      source.subscribe({
        next: sub.next,
        error: sub.errror || ((e) => subscriber.error(e)),
        complete: sub.complete || ((e) => subscriber.complete()),
      });
    });
  };
}

function primeiro() {
  return createPeipeableOperator((subscriber) => ({
    next(valor) {
      subscriber.next(valor);
      subscriber.complete();
    },
  }));
}

function nenhum() {
  return createPeipeableOperator((subscriber) => ({
    next(valor) {
      subscriber.complete();
    },
  }));
}

function ultimo() {
  let ultimoValor;

  return createPeipeableOperator((subscriber) => ({
    next(v) {
      ultimoValor = v;
    },
    complete() {
      if (ultimoValor != undefined) {
        subscriber.next(ultimoValor);
      }
      subscriber.complete();
    },
  }));
}

// from([1, 2, 3, 4, 5]).pipe(primeiro()).subscribe(console.log);
from([1, 2, 3, 4, 5])
  .pipe(
    // primeiro()
    // nenhum()
    ultimo()
  )
  .subscribe(console.log);
