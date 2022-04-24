// slice
const numbers = [24, 67, 89, 34, 56, 78, 235, 78, 87,];
const numberSliced = numbers.slice(3, 7);
// console.log(numberSliced);
// console.log(numbers);

// splice to remove an element from an array
// const spliceNumber = numbers.splice(3, 3);
// console.log(spliceNumber);
// console.log(numbers);


const spliceNumber2 = numbers.splice(4, 2, 111, 444, 666, 888,);
console.log(spliceNumber2);
console.log(numbers);