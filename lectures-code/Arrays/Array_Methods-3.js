// # Splice v/s Slice
const users = [
  { name: "Adam", index: 78 },
  { name: "Bulk", index: 83 },
  { name: "Caroline", index: 23 },
  { name: "Duke", index: 99 },
  { name: "Eve", index: 51 },
  { name: "Fedre", index: 11 },
  { name: "Gangnam", index: 96 },
];
const usersNameList = users.map((_) => _.name);
console.log(usersNameList);
// output : ["Adam","Bulk", "Caroline", "Duke", "Eve", "Fedre", "Gangnam"];

// 1.A) splice : startFrom(0) -> removeTo(1 - ..) -> replaceBy
usersNameList.splice(0, 1, "Kratos");
// i.e : splice from 0 index and stay to current index and replace it

console.log(usersNameList);
// output : ["Kratos","Bulk", "Caroline", "Duke", "Eve", "Fedre", "Gangnam"];

// 1.B) slice : grabValueFrom -> grabValueTo
const sliceNames = usersNameList.slice(0, 3);
console.log(sliceNames);
// output : ["Kratos","Bulk", "Caroline"];

// Note : Splice uses to modify the current array with replacement ,` where slice is more like to
// grab certain elements as a variables value

// # Array.every() : returns boolean on the basis of the condition

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const check1 = nums.every((num) => num % 2 == 0);
const check2 = nums.some((num) => num % 2 == 0);
console.log(check1);
// output : false
console.log(check2);
// output : true

const checkOnline1 = [
  { server: "Ov1", status: true },
  { server: "Ov2", status: false },
].every((access) => access.server === true);
console.log(checkOnline1);

// # Array.from() & new Set()
const str_nums = Array.from("123456789");
console.log(str_nums);
// output : ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const fruits_ = [
  "Apple",
  "Banana",
  "Grapes",
  "Lemon",
  "Strawberry",
  "Apple",
  "Grapes",
];
const filterout_duplicates = new Set(fruits_);
console.log(filterout_duplicates);
// Output : Set(5) { 'Apple', 'Banana', 'Grapes', 'Lemon', 'Strawberry' }
const remove_duplicates = Array.from(new Set(filterout_duplicates));
console.log(remove_duplicates);
// Output : [ 'Apple', 'Banana', 'Grapes', 'Lemon', 'Strawberry' ]
// same processes but shorthand : const not_dry = [...new Set(fruits_)]

const users_ = [
  ...new Set([
    { name: "foo", age: 0 },
    { name: "foo", age: 0 },
  ]),
];
console.log(users_);
// output : [{ name: "foo", age: 0 },{ name: "foo", age: 0 },]
// Note : so it might not work on array object fro duplicate value filteration

// # Array.flat() : covert arr_els to spreaded with one level like [1,2,3,4] from this [[1],[2],[3],4]
// levels of nested default one [[]], two [[[]]]
const flatArr1 = [1, [2, 3], [4, 5], 6, 7, [8, [9]]].flat();
console.log(flatArr1);
// output : [1,2,3,4,5,6,7,8,[9]]

// set flat level 2
const flatArr2 = [1, [2, 3], [4, 5], 6, 7, [8, [9]]].flat(2);
console.log(flatArr2);
// output : [1,2,3,4,5,6,7,8,9]
