const array = [1, 2, 3, 2, 4, 3, 5];
const setNewArr = array.filter(
  (value, index, self) => self.indexOf(value) == index
);
console.log(setNewArr);
