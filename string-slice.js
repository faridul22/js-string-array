const anthem = 'Amar Sonar Bangla Ame Tomai Valobashi';
const words = anthem.split(' ');
const withOutA = anthem.split('A');
// console.log(withOutA);
const itSlice = anthem.slice(11, 17);
// console.log(itSlice);
const itSubstr = anthem.substr(5, 5);
// console.log(itSubstr);
const itSubstring = anthem.substring(27, 37);
// console.log(itSubstring);


// CONCAT
const first = 'Amader';
const second = 'City';
// const fullString = first + second;
const fullString = first.concat(second);
console.log(fullString);

const words2 = ['a', 'b', 'c', 'd', 'e', 'f'];
// const sentence = words2.join('');
// const sentence = words2.join(' ');
// const sentence = words2.join(',');
// const sentence = words2.join(', ');
const sentence = words2.join('ff');
console.log(sentence);