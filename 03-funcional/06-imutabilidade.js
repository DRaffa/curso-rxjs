// Criando um clone do array com spread
function ordernar(array) {
  return [...array].sort();
}

const nums = [3, 1, 7, 9, 4, 6];
// Nao poder atualizar os registros originais
// const nums = Object.freeze([3, 1, 7, 9, 4, 6]);
nums.sort((a, b) => b - a);
const numsOrdenados = ordernar(nums);
console.log(nums, numsOrdenados);

const parteNums = nums.slice(1);

console.log(parteNums, nums);
