/*Reduce calcula os valores*/
const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 0, preco: 649.5 },
  { nome: 'Caderno', qtde: 4, preco: 27.1 },
  { nome: 'Lapis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.2 },
];

const getTotal = (item) => item.qtde * item.preco;
const totais = carrinho.map(getTotal);
console.log(totais);

const somar = (accumulator, elemento) => {
  console.log(accumulator, elemento);
  return accumulator + elemento;
};

const valorInicial = 0;
const totalGeral = totais.reduce(somar, valorInicial);
console.log(totalGeral);
