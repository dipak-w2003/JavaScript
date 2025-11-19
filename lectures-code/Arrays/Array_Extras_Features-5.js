// Real World Applications of an Array

// Searching in a Product List
let products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
];
console.log(products.find((product) => product.name === "Phone"));

// Grouping Data
let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];
let grouped = people.reduce((acc, person) => {
  acc[person.age] = acc[person.age] || [];
  acc[person.age].push(person);
  return acc;
});
console.log(grouped);

// Removing Duplicates in User Data
let emails = ["test@example.com", "user@example.com", "test@example.com"];
let uniqueEmails = [...new Set(emails)];
console.log(uniqueEmails);

// Extracting Unique Categories from a Dataset
let items = [
  { name: "Shirt", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Phone", category: "Electronics" },
];
let categories = [...new Set(items.map((item) => item.category))];
console.log(categories);

// Sorting Products by Multiple Attributes
let itemsList = [
  { name: "Laptop", price: 1000, rating: 4.5 },
  { name: "Phone", price: 500, rating: 4.7 },
  { name: "Tablet", price: 700, rating: 4.6 },
];
itemsList.sort((a, b) => a.price - b.price || b.rating - a.rating);
console.log(itemsList);

// Finding common Elements in Two Datasets
let dataset1 = ["apple", "banana", "grape"];
let dataset2 = ["melon", "banana", "lemon"];

const common_items_ = dataset1.filter((item) => dataset2.includes(item));
console.log(common_items_);
// output : 'banana'

// Advanced Interview Trick: Finding Intersection of Two Arrays
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const intersection = arr1.filter((num) => arr2.includes(num));
console.log(intersection);
// output : [3, 4, 5]
