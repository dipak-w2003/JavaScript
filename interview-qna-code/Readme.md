# Table of Contents

- [Fundamentals](#fundamentals)
- [What are the different data types in JavaScript?](#what-are-the-different-data-types-in-javascript)
- [What is the difference between null and undefined?](#what-is-the-difference-between-null-and-undefined)
- [How to Use var, let, and const Keywords](#how-to-use-var-let-and-const-keywords)
- [What is Hoisting?](#what-is-hoisting)
- [How Do Closures Work?](#how-do-closures-work)
- [How to Implement Debouncing](#how-to-implement-debouncing)
- [How to Implement Throttling](#how-to-implement-throttling)
- [What is Currying?](#what-is-currying)
- [What is the Difference between == and ===?](#what-is-the-difference-between-and)
- [How Does the this Keyword Work?](#how-does-the-this-keyword-work)
- [How to Use the call, apply and bind Methods](#how-to-use-the-call-apply-and-bind-methods)
- [What are Prototypes and Prototypal Inheritance?](#what-are-prototypes-and-prototypal-inheritance)
- [How to Use the Spread Operator](#how-to-use-the-spread-operator)
- [What are Promises?](#what-are-promises)
- [How to Use the async and await Keywords](#how-to-use-the-async-and-await-keywords)
- [What is an Event Loop?](#what-is-an-event-loop)
- [What is a callback function in JavaScript?](#what-is-a-callback-function-in-javascript)
- [What is the purpose of the setTimeout() function in Javascript?](#what-is-the-purpose-of-the-settimeout-function-in-javascript)
- [How can you check if an array includes a certain value?](#how-can-you-check-if-an-array-includes-a-certain-value)
- [How can you remove duplicates in an array?](#how-can-you-remove-duplicates-in-an-array)

## What are the different data types in JavaScript?

### Fundamentals

JavaScript is a high-level, interpreted programming language that makes it possible to create interactive web pages and online apps with dynamic functionality. Commonly referred to as the universal language, Javascript is primarily used by developers for front-end and back-end work.

### What are different Data Types in JS?

JavaScript has six primitive data types:

- Number
- String
- Boolean
- Null
- Undefined
- Symbol

## What is the difference between null and undefined?

null is an assignment value that represents no value or an empty value, while undefined is a variable that has been declared but not assigned a value.

```js
// null
let x = null;
// log : null

// undefined
let y;
// log : undefined
```

### Topics Source [FreeCodeCamp]('https://www.freecodecamp.org/news/js-interview-prep-handbook/#heading-how-does-the-this-keyword-work)

## 1. How to Use var, let, and const Keywords.

```js
function testScope() {
  if (true) {
    var varVariable = "var";
    js;

    let letVariable = "let";
    const constVariable = "const";
  }
  console.log(varVariable);
  // Output: "var"
  console.log(letVariable);
  // Error: letVariable is not defined
  console.log(constVariable);
  // Error: constVariable is not defined
}

testScope();
```

## 2. What is Hoisting?

Hoisting refers to JavaScript's default behavior that moves all variables and function declarations to the top. This means you can use them before they are declared.

```js
// normal function : supports hoisting
greet();
function greet(user = "root") {
  console.log(user);
}

// arrow & expression func
// foo1() : error
// foo2() : error
// Errors -> access before initialization
const foo1 = () => console.log("foo");
const foo2 = function () {
  console.log("foo");
};
```

## 3. How Do Closures Work?

closure occurs when an inner function "remembers" the variables in its outer scope, even after the outer function has executed.

### simple closure

```js
function getUser(name = "root") {
  function greet() {
    console.log(`Hello, ${name}`);
  }
  greet();
}
getUser();
```

```js
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
// `counter` is now a function with access to `count`
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
```

- function which returns a noName function which access "count" as its global state and increments plus returns it

### Encapsulating State with Closures

- This example demonstrates using closures to manage private state.

```js
function bankAccount(initialBalance) {
  let balance = initialBalance;
  // Private state
  return {
    deposit: function (amount) {
      balance += amount;
      return `Deposited ${amount}. New balance: ${balance}`;
    },
    withdraw: function (amount) {
      if (amount > balance) {
        return "Insufficient funds";
      }
      balance -= amount;
      return `Withdrew ${amount}. New balance: ${balance}`;
    },
    getBalance: function () {
      return `Current balance: ${balance}`;
    },
  };
}

const myAccount = bankAccount(1000);
console.log(myAccount.deposit(500));
// Output: Deposited 500. New balance: 1500
console.log(myAccount.withdraw(300));
// Output: Withdrew 300. New balance: 1200
console.log(myAccount.getBalance());
// Output: Current balance: 1200
```

## 4. How to Implement Debouncing.

Debouncing is a technique that delays a function call by few seconds and ensures that there is always a delay between function call and execution.

- When you call a function, it gets executed after a delay. However, if you call the function again within that delay, the previous call is cancelled and a new timer is started. The same process repeats for each subsequent function call.

- Let's see how to implement it:

```js
function debounce(func, delay) {
  let timeout = null;
  return (...args) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
      timeout = null;
    }, delay);
  };
}
```

- Let's test this behavior:

```js
// use case 1
function fun(a, b) {
  console.log(`This is a function with arguments ${a} and ${b}`);
}
const debouncedFun = debounce(fun, 500);
debouncedFun(2, 3);
debouncedFun(2, 3);
debouncedFun(2, 3);
// This is a function with arguments 2 and 3

// use case 2
function greetMe(user = { name: "dipak", age: 22 }) {
  console.log(user);
}
const debouncedGreet = debounce(greetMe(), 100);
```

- Real-World Use Case: Search Input
  const input = document.getElementById("search");

```js
function fetchResults(query) {
  console.log(`Fetching results for: ${query}`);
}
const debouncedFetchResults = debounce(fetchResults, 300);
input.addEventListener("input", (event) => {
  debouncedFetchResults(event.target.value);
});
```

## 5. How to Implement Throttling.

Throttling ensures that a function is executed at most once in a specified time interval, no matter how many times the event is triggered during that interval. This is useful for rate-limiting events like scrolling, resizing, or button clicks.

```js
function throttle(func, delay) {
  let timeout = null;
  return (...args) => {
    if (!timeout) {
      func(...args);
      timeout = setTimeout(() => {
        timeout = null;
      }, delay);
    }
  };
}
function fun(a, b) {
  console.log(`This is a function with arguments ${a} and ${b}`);
}

const throttledFun = throttle(fun, 500);

throttledFun(2, 3);
// This is a function with arguments 2 and 3
throttledFun(2, 3);

setTimeout(() => {
  throttledFun(2, 3);
}, 300);

setTimeout(() => {
  throttledFun(2, 3);
  // This is a function with arguments 2 and 3
}, 600);
```

Quick Conclusion:

- Debouncing: Typing in a search bar → API request sent only after user stops typing for X milliseconds.
- Throttling: Scrolling a page → Logs position every X milliseconds, regardless of how fast you scroll.

## 6. What is Currying?

Currying is a technique where a function with multiple arguments is transformed into a sequence of functions, with each function taking a single argument and returning another function. For example, consider the function below:

### Normal Function

```js
function add(a, b, c) {
  return a + b + c;
}
```

### Currying

```js
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const addTwo = curryAdd(2);
console.log(addTwo);
// prints the function

// Calling final result
const result1 = addTwo(5)(10);
console.log(result1); // 17
```

## 7. What is the Difference between == and ===?

```js
let a = 1;
let b = "1";
console.log(a == b); // true
console.log(a === b); // false
```

- `==` compares only the value of `a` and `b`,
- `===` compares both value and data type of `a` and `b`

## 8. How Does the this Keyword Work?

The this keyword is the object that you are currently referencing. Its value is set to the context in which you are using it. When referenced globally, this refers to the window object.

```js
console.log(this); // prints window {}
```

### Simple Object with `this` keyword

```js
const user = {
  username: "dipak",
  password: "password",
  phone: true,
  forgotPassword(phone, password) {
    if (this.phone === phone) {
      this.password = password;
    }
  },
};

user.forgotPassword(true, "pass2");
console.log(user);
```

- this can be used to access properties of an object.

## 9. How to Use the call, apply and bind Methods.

- Hold this topic

## 10. What are Prototypes and Prototypal Inheritance?

- Hold this topic

## ‌11. How to Use the Spread Operator.

### Array

```js
const fruits = ["🍎", "🍌"];
const veges = ["🥕", "🥔"];
const basket = [...fruits, ...veges];
console.log(basket);
```

### Objects

```js
const root = {
  sys: "manjaro",
  distro: "arch",
};
const permissions = {
  root_permissions: {
    read: true,
    write: true,
  },
  normal_permissions: {
    read: true,
    write: false,
  },
};
const rootSys = { ...root, ...permissions.root_permissions };
console.log(rootSys);

// rename root sys
const modifiedDistro = { ...root, distro: "parrot" };
```

## 12. What are Promises?

A Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to write asynchronous code in a more manageable and readable way than using callbacks.

### Basic Syntax:

A promise has three states:

- Pending: The initial state; the promise is neither fulfilled nor rejected.
- Fulfilled: The operation completed successfully.
- Rejected: The operation failed.

```js
let myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation (like a fetch or setTimeout)
  let success = true;

  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});

// 1 .then() - Handling success
// The .then() method is used to handle the fulfillment of a promise.
myPromise
  .then((result) => {
    console.log(result);
    // "Operation successful!"
  })

  // 2 .catch() - Handling failure
  // The .catch() method is used to handle any errors or rejections.
  .catch((error) => {
    console.log(error);
    // "Operation failed!" (if promise is rejected)
  });
```

### Example: Fetching Data with Promises

```js
function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          reject("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

fetchData("https://dummyjson.com/recipes")
  .then((data) => {
    console.log(data?.recipes);
    // Handle success
  })
  .catch((error) => {
    console.error(error);
    // Handle failure
  });
```

## 13. How to Use the async and await Keywords.

```js
async function fetchData(api) {
  try {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

async function getRecipes() {
  const fetchedData = await fetchData("https://dummyjson.com/recipes");
  if (fetchedData && fetchedData.recipes) {
    console.log(fetchedData.recipes);
  } else {
    console.error("Error fetching recipes:", fetchedData);
  }
}

getRecipes();
```

## 14. What is an Event Loop?

```js
document.getElementById("button").addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Button clicked");
});
```

Source : Mixed

## What is a callback function in JavaScript?

A callback function in JavaScript is a function that is passed as an argument to another function and is executed after the completion of that function.

### Simple Callback

```js
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}
function sayGoodBye() {
  console.log("Goodbye!");
}
// Pass the function reference, not the result of calling it
greet("root", sayGoodBye);
```

### Fetching data

```js
function fetchedData(callback) {
  console.log("....fetching data");
  setTimeout(() => {
    const data = { name: "root", permissions: "rwx", desktop: "kde plasma" };
    callback(data);
  }, 1000);
}

function processingData(data) {
  console.log("....processing data");
  console.log(data);
}
fetchedData(processingData);
```

## What is the purpose of the setTimeout() function in Javascript?

It allows you to delay the execution of code for a defined period.

```js
setTimeout(function, delay);
```

### Simple Use

```js
console.log("Start");
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);
console.log("End");
```

## How can you check if an array includes a certain value?

JavaScript Inbuilt Array Mehtod `includes` can identify with `boolean` value

```js
const rolls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const checkR10 = rolls.includes(10);
console.log(checkR10);
// ouput : true
```

## How can you remove duplicates in an array?

### Using Set

The Set object stores unique values, making it a straightforward way to remove duplicates.

```js
const array = [1, 2, 3, 2, 4, 3, 5];
const uniqueArray = [...new Set(array)];

console.log(uniqueArray);
// Output: [1, 2, 3, 4, 5]
```

### Using filter()

You can use the filter() method to remove duplicates by checking the index of each element.

```js
const array = [1, 2, 3, 2, 4, 3, 5];
const setNewArr = array.filter(
  (value, index, self) => self.indexOf(value) == index
);
console.log(setNewArr);
```

#### Which Method Should You Use?

- Set: Best for simplicity and performance in most cases.
- filter(): Works well but is less efficient for large arrays.
- Custom logic (e.g., forEach): Offers more control but requires more code.

## What is the purpose of async and await in JavaScript?
