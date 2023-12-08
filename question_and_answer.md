## Questions 1

let greeting;
greetign = {};
console.log(greetign);
- A: {}
- B: ReferenceError: greetign is not defined
- C: undefined

Answer:B: ReferenceError: greetign is not defined

Explanation: The code attempts to create an object greetign, but there is a typo in the variable name (greetign instead of greeting). This will result in a ReferenceError because greetign is not defined.

## Question 2.

function sum(a, b) {
return a + b;
}

sum(1, "2");
- A: NaN 
- B: TypeError
- C: "12"
- D: 3

Answer : A:NaN

Explanation: JavaScript performs type coercion when you try to add a number and a string. In this case, 1 is a number, and "2" is a string, so the + operator concatenates them as strings, resulting in "12". However, since one of the operands was a string, the final result is not a number, but NaN (Not-a-Number).

## Question 3.

const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
- A: ['🍕', '🍫', '🥑', '🍔']
- B: ['🍝', '🍫', '🥑', '🍔']
- C: ['🍝', '🍕', '🍫', '🥑', '🍔']
- D: ReferenceError

Answer : A: ['🍕', '🍫', '🥑', '🍔']

Explanation: Changing the info.favoriteFood property to "🍝" does not affect the original food array. Therefore, when you log food, it remains the same as the initial array.

## Question 4.

function sayHi(name) {
return `Hi there, ${name}`;
}

console.log(sayHi());
- A: Hi there,
- B: Hi there, undefined
- C: Hi there, null
- D: ReferenceError

Answer : B: Hi there, undefined

Explanation: The sayHi function expects an argument name, but it is called without any argument. In JavaScript, when a function is called without an argument, the parameter takes the value undefined.

## Question 5.

let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
if (num) count += 1;
});

console.log(count);
- A: 1
- B: 2
- C: 3
- D: 4

Answer :B: 2

Explanation: The forEach loop iterates over the nums array, and for each non-zero number (1, 2, 3), it increments the count variable. The final value of count is 2, and that is what will be logged to the console.
