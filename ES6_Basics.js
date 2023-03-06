/*Since in all questions array "a" is same, we're only declaring it once only*/

const a = [1, 3, 5, 2, 4];

// Scenario 1
const result1 = a.filter((num, index) => index %2 === 0);
console.log(result1); // Output: [1, 5, 4]

// Scenario 2
const result2 = a.map(num => num*num);
console.log(result2); // Output: [1, 9, 25, 4, 16]

// Scenario 3
const result3 = a.filter((num, index) => index %2 === 0).map(num => num*num);
console.log(result3); // Output: [1, 25, 16]

