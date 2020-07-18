const pessoa = {
  nome: 'Maria',
  altura: 1.76,
  cidade: 'Sao Paulo',
  endereco: {
    rua: 'Feliz',
  },
};

// Atribuicao por referência
// const novaPessoa = pessoa;

// Passagem por referencia
// function alteraPessoa(novaPessoa) {
//   novaPessoa.nome = 'Joao';
//   novaPessoa.cidade = 'Fortaleza';
// }

// function alteraPessoa(pessoa) {
//   // Clone de primeiro nivel
//   const novaPessoa = { ...pessoa };
//   novaPessoa.nome = 'Joao';
//   novaPessoa.cidade = 'Fortaleza';
//   return novaPessoa;
// }

function alteraPessoa(pessoa) {
  // Clone de primeiro nivel
  const novaPessoa = { ...pessoa };
  novaPessoa.nome = 'Joao';
  novaPessoa.cidade = 'Fortaleza';
  novaPessoa.endereco.rua = 'ABC';
  return novaPessoa;
}

const novaPessoa = alteraPessoa(pessoa);

console.log(pessoa);
console.log(novaPessoa);

let a = 3;
let b = a; // atribuicao por valor (copia)

a++;
