const elements = [0, 1, false, 2, "", 3];

const compact = (arg) => {
  if (typeof arg === "object") {
    Object.values(obj).filter((x) => Boolean(x) === true);
  }
  if (typeof arg === "array") {
    return arg.filter((x) => Boolean(x));
  }
};

//function that returns truthy values from an object
const truthy = (obj) => {
  const arrValues = Object.values(obj);
  const arrKeys = Object.keys(obj);
  const truthyValues = arrValues.filter((x) => Boolean(x) === true);
  for (let keys in obj) {
    let arr = [];
    if (obj[keys] === true) {
      arr.push(keys);
    }
    return arr;
  }
};

console.log(compact(123)); // 123
console.log(compact(null)); // null
console.log(compact([0, 1, false, 2, "", 3])); // [1, 2, 3]
console.log(compact({})); // {}
console.log(
  compact({
    price: 0,
    name: "cloud",
    altitude: NaN,
    taste: undefined,
    isAlive: false,
  })
); // {name: "cloud"}
