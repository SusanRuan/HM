// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. Answer must pass all tests below and have an On time complexity achieved by using 1 or more frequency counter

function validAnagram(str1, str2) {
  if (typeof str1 != "string" || typeof str2 != "string") return false;
  if (str1.length != str2.length) return false;
  [str1, str2] = [str1.toLocaleLowerCase(), str2.toLocaleLowerCase()];
  let frequencyStr1 = {};
  let frequencyStr2 = {};
  for (let char of str1) {
    frequencyStr1[char] = (frequencyStr1[char] || 0) + 1;
  }
  for (let char of str2) {
    frequencyStr2[char] = (frequencyStr2[char] || 0) + 1;
  }
  for (let char in frequencyStr1) {
    if (frequencyStr1[char] != frequencyStr2[char]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("texttwisttime", "timetwisttext"));

// function validAnagram(str1, str2) {
//   if (str1.length != str2.length) {
//     console.log("False");
//     return;
//   }

//   let str1Sorted = str1.split("").sort().join("");
//   let str2Sorted = str2.split("").sort().join("");
//   if (str1Sorted === str2Sorted) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
// }

// validAnagram("", ""); // true
// validAnagram("aaz", "zza"); // false
// validAnagram("anagram", "nagaram"); // true
// validAnagram("rat", "car"); // false)
// validAnagram("awesome", "awesom"); // false
// validAnagram("qwerty", "qeywrt"); // true
// validAnagram("texttwisttime", "timetwisttext"); // true
