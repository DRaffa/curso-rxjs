/** Map transformar um array em outro array de mesmo tamanho */

const nums = [1, 2, 3, 4, 5];
const dobro1 = (n) => n * 2;
console.log(nums.map(dobro1));

const dobro2 = (n, index) => n * 2 + index;
console.log(nums.map(dobro2));

const dobro3 = (n, index, array) => n * 2 + index + array.length;
console.log(nums.map(dobro3));

const nomes = ['Ana', 'Rafael', 'Bia', 'Thay', 'Guilherme'];

const primeiraLetra = (texto) => texto[0];
const letras = nomes.map(primeiraLetra);
console.log(nomes, letras);
