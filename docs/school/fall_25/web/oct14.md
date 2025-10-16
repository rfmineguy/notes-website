# Oct 14
## Control Flow
- if
- switch-case
- for
- while
*NOTE: These are all nearly identical to the c/c++ variants*

## If
```js
const date = new Date()
const hour = date.getHours()
let greeting;

if (hour < 12) {
  greeting = "Morning";
}
else if (hour < 18) {
  greeting = "Afternoon"
}
else {
  greeting = "Night"
}

document.getElementById("greeting").innerHTML = greeting;
```

## Switch
```js
// type : 0 - mob, 1 - player
const entity = { type: 0 }
switch (entity.type) {
  case 0: console.log('im a mob'); break;
  case 1: console.log('im a player'); break;
  default: console.log('i dont know what i am'); break;
}
```

```js
const date = new Date();
const day = date.getDay();
let today;

switch (day) {
  case 0:
    today = "Sunday"; break;
  case 6:
    today = "Saturday"; break;
  default:
    today = "a weekday";
    break; // optional
}
```

## Loop
```js
const nums = [1,2,3,4,5];
let squares = [];

for (let i = 0; i < nums.length; i++) {
  squares.push(nums[i] * nums[i])
}
for (let i in nums) {
  squares.push(nums[i] * nums[i])
}
for (let num of nums) {
  squares.push(num * num)
}
```

## Function
- named, reusable block of code that performs a given task
```js
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));
```

## Var vs Let
- var
  - function scoped
  - same variable is shared across declarations
- let 
  - block scoped
  - new variable created for each declaration

```js
function var_vs_let() {
  if (true) {
    var x = 1
    let y = 2
  }
  console.log(`x = ${x}`)   // works as 'x' is function scoped
  console.log(`y = ${y}`)   // error as 'y' is block scoped
}
```

```js
for (var i = 0; i < 3; i++) {
  console.log(`var: i = ${i}`)
} // 0 1 2

for (let i = 0; i < 3; i++) {
  console.log(`let: i = ${i}`)
} // 0 1 2

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(`var_shared: i = ${i}`), 100)
} // 3 3 3
// by the time the console logs occur, the reference to i has already been incremented to 3

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(`let_new: i = ${i}`), 100)
} // 1 2 3
```
