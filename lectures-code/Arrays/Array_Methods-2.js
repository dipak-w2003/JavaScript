// Arrays Methods
// Its a built in methods which receives an call-back function (no-name func)
// for doing different types of array operations

// #  Array.forEach() : returns value
const names = ["Adam", "Bulk", "Caroline", "Duke", "Eve", "Fedre", "Gangnam"];
names.forEach((name, index) => {
  console.log(name);
  // output : "Adam", "Bulk", "Caroline", "Duke", "Eve", "Fedre", "Gangnam"
});

// #  Array.map() : returns new Array
const fruitsStorage = names.map((fruit) => {
  return {
    name: fruit,
    index: Math.floor(Math.random() * 100),
    // Note : this indexing method is not recommended cause it will cause to data duplicate problem
    // unless you have functions to handle duplicate index's
  };
});
console.log(fruitsStorage);
// output :
// [
//   { name: "Adam", index: 78 },
//   { name: "Bulk", index: 83 },
//   { name: "Caroline", index: 23 },
//   { name: "Duke", index: 99 },
//   { name: "Eve", index: 51 },
//   { name: "Fedre", index: 11 },
//   { name: "Gangnam", index: 96 },
// ];

// # Array.filter() : returns a new Array

const namesLength = names.filter((name) => name.length > 4);
console.log(namesLength);

// # Array.reduce returns a value
const tourists = [
  { id: 12, $: 800, age: 60 },
  { id: 15, $: 300, age: 30 },
  { id: 19, $: 600, age: 16 },
  { id: 72, $: 700, age: 25 },
  { id: 42, $: 100, age: 28 },
];
// task find total budget,0
const $s = tourists.map((person) => person.$);
console.log($s);
const totalBudgets1 = $s.reduce((acc, nums) => acc + nums);
console.log(totalBudgets1);

// shorthand method
const totalBudgets2 = tourists
  .map((tourists) => tourists.$)
  .reduce((acc, nums) => acc + nums);
console.log(totalBudgets2);

// task: filter age > 18 --> collect Money ---> sum Money
const FinalBudget = tourists
  .filter((_) => _.$ > 300 && _.age > 18)
  .map((_) => _.$)
  .reduce((_, __) => _ + __, 0);
console.log(FinalBudget);
// output : 1500

// # Array.sort() : sorting shorthand
// normally a - b params denoted universal sorting smaller to larger, so
// b - a  -> larger to small & so on ....
const sortedNumbers = [1, 3, 4, 6, 78, 9, 11, 15, 12].sort((a, b) => a - b);
console.log(sortedNumbers);
// output : [1,3,4, .....]

// #. Array.find() -> returns object/ value
const findOddValue = [
  "Apple",
  "Banana",
  "Cherry",
  "Dragon fruit",
  "oddOne",
].find((e) => e === "Banana");
console.log(findOddValue);
// output : "Banana"

const findCertainTourist = tourists.find((_) => _.id == 12 && _.age === 60);
console.log(findCertainTourist);
// output : { id: 12, $: 800, age: 60 }

// NOte : "find" returns single value on the basis of accurate data where "filter" gives
//  entire values which meets its condition with an array

// # Array.includes() -> returns boolean either undefined / null
const checkApple = ["Apple", "Banana", "Cherry", "Dragon fruit"].includes(
  "Apple"
);
console.log(checkApple);
// output : true


