function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      if (Math.random() < chanceErro) {
        reject('Ocorreu um erro!');
      } else {
        resolve(valor);
      }
    } catch (error) {
      resolve(error);
    }
  });
}

funcionarOuNao('Testando...', 0.5)
  .then((valor) => valor)
  .then(
    (valor) => consol.log(`Valor: ${valor}`),
    (err) => console.log(`Erro.: Especifico`)
  )
  .catch((mensagem) => console.log(`Erro: ${mensagem}`))
  .then(() => console.log(`Fim!`)); //Depois do cath os then a seguir nao desce mais valor
