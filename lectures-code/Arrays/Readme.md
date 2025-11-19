# JavaScript Arrays: Easy to Advanced Methods with Interview Tips

## 1. Creating an Array
```javascript
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);
```

## 2. Accessing and Modifying Elements
```javascript
console.log(fruits[0]); // Apple
fruits[1] = "Blueberry";
console.log(fruits);
```

## 3. Adding and Removing Elements
```javascript
fruits.push("Mango"); // Add to end
fruits.pop(); // Remove from end
fruits.unshift("Grapes"); // Add to beginning
fruits.shift(); // Remove from beginning
console.log(fruits);
```

## 4. Looping Through an Array
```javascript
fruits.forEach((fruit, index) => console.log(index, fruit));
```

## 5. Searching and Filtering
```javascript
console.log(fruits.indexOf("Cherry")); // Find index
console.log(fruits.includes("Apple")); // Check existence
let numbers = [10, 25, 30, 40];
console.log(numbers.filter(num => num > 20));
```

## 6. Transforming Arrays
```javascript
console.log(numbers.map(num => num * 2)); // Using map
console.log(numbers.reduce((acc, num) => acc + num, 0)); // Using reduce
```

## 7. Sorting Arrays
```javascript
console.log(numbers.sort((a, b) => a - b));
```

## 8. Splice and Slice
```javascript
fruits.splice(1, 1, "Strawberry");
console.log(fruits);
console.log(fruits.slice(1, 3));
```

## 9. Flattening Nested Arrays
```javascript
let nestedArr = [1, [2, 3], [4, [5, 6]]];
console.log(nestedArr.flat(Infinity)); // Deep flattening
```

## 10. Removing Duplicates
```javascript
let numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = [...new Set(numbersWithDuplicates)];
console.log(uniqueNumbers);
```

## 11. Concatenation
```javascript
let moreFruits = ["Pineapple", "Orange"];
console.log([...fruits, ...moreFruits]);
```

## 12. Every and Some
```javascript
console.log(numbers.every(num => num > 5)); // Check if all meet condition
console.log(numbers.some(num => num > 35)); // Check if any meet condition
```

## 13. Fill
```javascript
let filledArray = new Array(5).fill("X");
console.log(filledArray);
```

## 14. Reverse
```javascript
console.log(fruits.reverse());
```

## 15. Join
```javascript
console.log(fruits.join(", "));
```

## 16. Find and FindIndex
```javascript
console.log(numbers.find(num => num > 20));
console.log(numbers.findIndex(num => num > 20));
```

## 17. ReduceRight
```javascript
console.log(numbers.reduceRight((acc, num) => acc + num, 0));
```

## 18. CopyWithin
```javascript
let copyArray = [1, 2, 3, 4, 5];
console.log(copyArray.copyWithin(1, 3));
```

## 19. Entries
```javascript
for (let [index, value] of fruits.entries()) {
  console.log(index, value);
}
```

## 20. Keys and Values
```javascript
console.log([...fruits.keys()]);
console.log([...fruits.values()]);
```

## 21. Real-World Applications
### Searching in a Product List
```javascript
let products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 }
];
console.log(products.find(product => product.name === "Phone"));
```

### Grouping Data
```javascript
let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 }
];
let grouped = people.reduce((acc, person) => {
  acc[person.age] = acc[person.age] || [];
  acc[person.age].push(person);
  return acc;
}, {});
console.log(grouped);
```

### Removing Duplicates in User Data
```javascript
let emails = ["test@example.com", "user@example.com", "test@example.com"];
let uniqueEmails = [...new Set(emails)];
console.log(uniqueEmails);
```

### Paginating API Results
```javascript
function paginate(array, pageSize, pageNumber) {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}
console.log(paginate([1,2,3,4,5,6,7,8,9,10], 3, 2));
```

### Extracting Unique Categories from a Dataset
```javascript
let items = [
  { name: "Shirt", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Phone", category: "Electronics" }
];
let categories = [...new Set(items.map(item => item.category))];
console.log(categories);
```

### Sorting Products by Multiple Attributes
```javascript
let itemsList = [
  { name: "Laptop", price: 1000, rating: 4.5 },
  { name: "Phone", price: 500, rating: 4.7 },
  { name: "Tablet", price: 700, rating: 4.6 }
];
itemsList.sort((a, b) => a.price - b.price || b.rating - a.rating);
console.log(itemsList);
```

### Finding Common Elements in Two Datasets
```javascript
let dataset1 = ["apple", "banana", "grape"];
let dataset2 = ["banana", "grape", "melon"];
let commonItems = dataset1.filter(item => dataset2.includes(item));
console.log(commonItems);
```

## 22. Advanced Interview Trick: Finding Intersection of Two Arrays
```javascript
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
let intersection = arr1.filter(num => arr2.includes(num));
console.log(intersection); // [3, 4, 5]
```

