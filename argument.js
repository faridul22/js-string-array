function addNumbers(num1, num2) {
    let result = 0;
    for (const num of arguments) {
        result = result + num
    }
    return result;
};
const sum = addNumbers(23, 12, 13, 1236);
console.log(sum);