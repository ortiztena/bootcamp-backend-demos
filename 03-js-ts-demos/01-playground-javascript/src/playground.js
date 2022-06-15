// function academicNotes(objectNotes) {
//   console.log("Initial solution - academicNotes");
//   // Implement function

//   let checkResult = checker(objectNotes);

//   let accumulatedPercentage = 0;
//   let accumulatedNote = 0;
//   let fields = Object.keys(checkResult).length;

//   for (let i in checkResult) {
//     accumulatedPercentage += obj[i];
//     accumulatedNote += (obj[i] * i) / 100;
//   }

//   const averageObj = {
//     accumulatedPercentage: accumulatedPercentage / fields,
//     accumulatedNote: accumulatedNote,
//   };

//   return averageObj;
//   // accumulatedPercentage / fields;
// }

// const elements = [0, 1, false, 2, "", 3];

// const checker = (arg) => {
//   if (Boolean(arg) === true) {
//     if (Array.isArray(arg) === false && typeof arg === "object") {
//       //object checker
//       if (Object.keys(arg).length - 1 >= 0) {
//         // empty object checker
//         Object.values(arg).filter((x) => {
//           // object values checker
//           if (Boolean(x) === false) {
//             throw new Error("'Some value is out of range'");
//           } else {
//             return x;
//           }
//         });
//         Object.keys(arg).filter((x) => {
//           a;
//           // object keys checker
//           if (Boolean(Number(x)) === true) {
//             return x;
//           }
//           if (Boolean(Number(x)) === false) {
//             if (x === undefined || x === null || x === "" || x === 0) {
//               throw new Error("'Some value is out of range'");
//             } else {
//               return x;
//             }
//           } else {
//             throw new Error("'Some key is not an integer'");
//           }
//         });

//         return arg;
//       } else {
//         throw new Error("Object is empty");
//       }
//     }

//     if (Array.isArray(arg) === true && arg.length > 0) {
//       throw new Error("Not an object");
//     }
//   }
//   return arg;
// };

// const truthyObj = (obj) => {
//   const truthyValues = Object.entries(obj).filter((x) => Boolean(x[1]));
//   return Object.fromEntries(truthyValues);
// };

// return
//   accumulatedPercentage: accumulatedPercentage,
//   accumulatedNote: accumulatedNote,

// throw new Error
// 'Not an object' ||
// 'Object is empty' ||
// 'Some key is not a number' ||    <!-null, undefined, empty, not a number-->
// 'Some key is out of range' ||
// 'Some value is not an integer' ||    <!-null, undefined, empty, not a number, not an integer-->
// 'Some value is out of range' ||
// 'Total sum of percentage values exceeds the maximum'

// module.exports = {
//   academicNotes,
// };
// let obj = {};
// let obj = [{}];
// let obj = { 2.9: undefined, 3.1: 30 }; // { accumulatedPercentage: 70, accumulatedNote: 2.09 }}
// console.log(academicNotes(obj));

function academicNotes(objectNotes) {
  console.log(objectNotes);
  if (
    typeof objectNotes !== "object" ||
    objectNotes === null ||
    Array.isArray(objectNotes)
  ) {
    throw new Error("Not an Object");
  }
  if (
    Object.keys(objectNotes).length === 0 &&
    objectNotes.constructor === Object
  ) {
    throw new Error("Object is Empty");
  }
  var total_value = 0,
    result = 0;
  for (const [key, value] of Object.entries(objectNotes)) {
    if (!key || key === null || isNaN(key)) {
      throw new Error("Some key is Not a Number");
    }
    if (key < 0 || key > 5) {
      throw new Error("Some key Out of Range allowed");
    }
    if (!value || value === null || isNaN(value) || !Number.isInteger(value)) {
      throw new Error("Some value is Not an Integer");
    }
    if (value < 0 || value > 100) {
      throw new Error("Some value is Out of Range allowed");
    }
    total_value += value;
    result += key * (value / 100.0);
  }
  if (total_value > 100) {
    throw new Error(
      "Total sum of percentage values exceeds the maximum allowed"
    );
  }
  return { accumulatedPercentage: total_value, accumulatedNote: result };
}

// academicNotes({x:10})
console.log(academicNotes({ 2.9: 40, 3.1: 30 }));
let obj = { 2.9: 40, 3.1: 30 };
