/* // Sort
const numbers = [2, 1, 4, 5, 3, 6, 9, 6, 8, 7];
const sortNumbers = numbers.sort();
// console.log(sortNumbers);
const friends = ['kabli', 'joshim', 'razzak', 'anwar', 'depjol'];
const sortedFriends = friends.sort();
console.log(sortedFriends);
const bigNumbers = [66, 13, 56, 78, 98, 23, 34,];
const sortBigNumber = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(bigNumbers);
// Revers
const reverseNumbers = numbers.reverse();
const reverseSortedFriend = friends.sort().reverse();
console.log(reverseSortedFriend);
// console.log(reverseNumbers);


 */


const numbers = [5, 7, 9, 1, 4, 2, 3, 5];
const friends = ['kabli', 'khalid', 'razzak', 'deepjol', 'anwar', 'bappi'];
const bigNumbers = numbers.sort();
console.log(numbers);
const bigFriends = friends.sort();
console.log(friends);
const reversFriends = friends.sort().reverse();
console.log(reversFriends);