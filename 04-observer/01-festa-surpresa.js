const readline = require('readline');

function obterResposta(pergunta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(pergunta, (resp) => {
      resolve(resp);
      rl.close();
    });
  });
}

// obterResposta('Esse é um teste? ').then((resp) => {
//   console.log(resp);
// });

//Criando os observer
function namorada() {
  setTimeout(() => {
    console.log('N: Apagar as luzes');
    console.log('N: Pedir Silencio');
    console.log('N: Surpresa!!!');
  }, 4000);
}
// observer
function sindico(evento) {
  setTimeout(() => {
    console.log('S: Monitoramento o barulho!');
    console.log(`${evento.resp} - data: ${evento.data}`);
  }, 1000);
}
// subject
async function porteiro(interessados) {
  while (true) {
    const resp = await obterResposta('O namorado chegou? (s/n/q)');
    if (resp.toLowerCase() === 's') {
      // os observadores sao notificados
      (interessados || []).forEach((obs) => obs({ resp, data: Date.now() }));
    } else if (resp.toLowerCase() === 'q') {
      break;
    }
  }
}

/**Registrei dois observadores!
 * namorada, sindico
 * Os observadores sao: namorada e sindico
 * O subject é o porteiro
 *
 *
 */
porteiro([namorada, sindico]);
