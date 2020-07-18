// Functors dao objetos que implementam a funcao MAP
// que tambem e um wrapper de um valor

//Array é um tipo de functors
const nums = [1, 2, 3, 4, 5, 6];

const novosNums = nums
  .map((elemento) => elemento + 10)
  .map((elemento) => elemento * 2);

console.log(nums, novosNums);

function tipoSeguro(valor) {
  return {
    valor,
    valido() {
      return this.valor !== undefined && this.valor !== null;
    },
    map(fn) {
      if (this.valido()) {
        const novoValor = fn(this.valor);
        return tipoSeguro(fn(novoValor));
      }
    },
    flatMap(fn) {
      return this.map(fn).valor;
    },
  };
}

const original = 'Esse e um texto';
const resultado = tipoSeguro(original)
  .map((t) => t.toUpperCase())
  .map((t) => `${t}!!!!`)
  .flatMap((t) => t.split('').join(' '));

console.log(original, resultado.valor);
