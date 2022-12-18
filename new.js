// function makeInputVerifier(minimum, maximum) {
//   // write your code here
//   return function verify(inputValue) {
//     if (inputValue >= minimum && inputValue <= maximum) {
//       return `${inputValue} is in range`;
//     } else if (inputValue >= minimum && inputValue <= maximum) {
//       return `${input} is in range`;
//     } else if (inputValue > maximum) {
//       return `${input} is more than ${maximum}`;
//     }
//   };
// }

// const case1 = makeInputVerifier(10, 20)(15);
// console.log(case1);

function solution(obj, operation, prop, newValue) {
  if (operation === "delete" && obj.hasOwnProperty(prop)) {
    delete obj[prop];
  } else if (operation === "edit" && obj.hasOwnProperty(prop)) {
    obj[prop] = newValue;
  }
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key} ${value}`);
  }
}
let obj = {
  city: "florida",
  lastName: "Bliss",
  name: "John",
};

solution(obj, "edit", "city", "seattle");
// solution(obj, "delete", "city", "seattle");
// solution(obj, "edit", "abc", "Tor");
