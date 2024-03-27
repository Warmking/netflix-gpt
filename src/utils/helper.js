const arr = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "John", age: 30 },
];

const uniqueObjects = arr.filter(
  (item, index) =>
    arr.findIndex((obj) => obj.name === item.name && obj.age === item.age) ===
    index
);

console.log(uniqueObjects);
