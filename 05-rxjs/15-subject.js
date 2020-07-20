const { Observable, Subject } = require('rxjs');

function getObservable() {
  return new Observable((subscriber) => {
    setTimeout(() => {
      console.log('#1 Obs...');
      subscriber.next(Math.random());
    }, 1000);
  });
}

function getSubject() {
  const sub = new Subject();
  setTimeout(() => {
    console.log('#2 Sub...');
    sub.next(Math.random());
    sub.complete();
  }, 1000);

  return sub;
}

const obs = getObservable();
obs.subscribe(console.log);
obs.subscribe(console.log);

const sub = getSubject();
sub.subscribe(console.log);
sub.subscribe(console.log);
