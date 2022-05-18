const elements = [0, 1, false, 2, "", 3];

const compact = (arg) => {
  if (Boolean(arg) === true) {
    if (Array.isArray(arg) === false && typeof arg === "object") {
      return truthyObj(arg);
    }
    if (Array.isArray(arg) === true && arg.length > 0) {
      return arg.filter((x) => Boolean(x));
    }
  }
  return arg;
};

const truthyObj = (obj) => {
  const truthyValues = Object.entries(obj).filter((x) => Boolean(x[1]));
  return Object.fromEntries(truthyValues);
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
