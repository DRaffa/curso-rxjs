const nums = [4, 8, 3, 2, 9, 1, 9, 3];

//#1 - Dados Mutaveis
// let total = 0;

// for (let index = 0; index < nums.length; index++) {
//   total += nums[index];
// }

// console.log(total);

//2# - Reduce Funcional
// const somar = (a, b) => a + b;
// const total = nums.reduce(somar);
// console.log(total);

//3# - Recursividade
function somarArray(array, total = 0) {
  if (array.length === 0) {
    return total;
  }
  return somarArray(array.slice(1), total + array[0]);
}

const total = somarArray(nums);
console.log(total);
