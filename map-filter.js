numbers = [2, 5, 6, 8, 7, 9];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// const squar = x => x * x;
const result = numbers.map(x => x * x);
console.log(result)

const bigger = numbers.filter(x => x > 6);
console.log(bigger);

const more = numbers.find(x => x < 5);
console.log(more);

const get = numbers.find(x => x > 6);
console.log(get);
