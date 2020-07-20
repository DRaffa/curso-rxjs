const { from } = require('rxjs');

const { of, Observable } = require('rxjs');

function terminaCom(parteFinal) {
  return function (fonte) {
    return Observable.create((subscriber) => {
      fonte.subscribe({
        next(valor) {
          if (Array.isArray(valor)) {
            subscriber.next(valor.filter((el) => el.endsWith(parteFinal)));
          } else if (texto.endsWith(parteFinal)) {
            subscriber.next(texto);
          }
        },
        error(e) {
          subscriber.error(e);
        },
        complete() {
          subscriber.complete();
        },
      });
    });
  };
}

of(['Rafael Silva', 'Cleide Silva', 'Thayani Pereira', 'Vanda Pereira'])
  .pipe(terminaCom('Silva'))
  .subscribe(console.log);
