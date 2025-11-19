// An Array is non - pirmitive data types which holds the all kind of data types like
// a storage room.

// # 1. Two ways to create an Array
const array1 = new Array("Apple", "Banana", "Cherry");
const array2 = ["Jake", "Joe"];
console.log(array1);
// output : ["Apple", "Banana", "Cherry"]
console.log(array2);
// output : ["Jake", "Joe"]

// # 2. Accessing and Modifying Elements (by index/position)
// index a term is used in an array which defines the position of the elements inside it which starts from 0 position
const grabValue = array2[1];
console.log(grabValue);
// output : "Joe"

// # 3. Adding and Removing Elements

// A. A/E Elements from start index
const fruits = ["Banana", "Litchie", "Mango", "Emily"];
fruits.shift();
console.log(fruits);
// output : ["Litchie","Mango","Emily"]
fruits.unshift("Papaya");
console.log(fruits);
// output : ["Papaya","Litchie","Mango","Emily"]

// B. A/E Elements from Last index
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
nums.push(9, 10);
console.log(nums);
// output : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
nums.pop();
console.log(nums);
// output : [1, 2, 3, 4, 5, 6, 7, 8, 9]
