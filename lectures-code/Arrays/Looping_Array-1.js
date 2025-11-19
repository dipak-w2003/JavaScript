// Loops : run the program / array  until it meets conditional or limit

// # 1. Traditional Method
// no name array

for (let i = 0; i < [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].length; i++) {
  if (i % 2 === 0 && i !== 0) console.log(i);
  // output : 2, 4, 6, 8
}

const fruits = ["Avocado", "Banana", "Cherry", "Dragon Fruit", "Emily"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let i = 0;
while (i < [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].length) {
  if (i % 2 === 0 && i !== 0) console.log(i);
  // output : 2, 4, 6, 8

  i++;
  // increment i
}

// # 2. Standard Method
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((val, index, array) => {
  console.log(val);
});
