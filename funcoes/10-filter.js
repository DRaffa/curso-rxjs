/** Map transformar um array em outro array de mesmo tamanho ou menor*/

const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 0, preco: 649.5 },
  { nome: 'Caderno', qtde: 4, preco: 27.1 },
  { nome: 'Lapis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.2 },
];

const qtdeMaiorQueZero = (item) => item.qtde > 0;
const itensValido = carrinho.filter(qtdeMaiorQueZero);
console.log(itensValido);

const getNome = (item) => item.nome;

const nomeItensValido = carrinho.filter(qtdeMaiorQueZero).map(getNome);
console.log(nomeItensValido);

const qtdeMuitoGrande = (item) => item.qtde > 1000;
const nomeItensMuitoGrandeValido = carrinho
  .filter(qtdeMuitoGrande)
  .map(getNome);
console.log(nomeItensMuitoGrandeValido);
