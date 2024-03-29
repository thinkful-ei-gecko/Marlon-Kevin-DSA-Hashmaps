'use strict';

const HashMap = require('./HashMap');

function removeDupes(string) {
  let hm = new HashMap();
  for (let i = 0; i < string.length; i++) {
    let key = string[i];
    hm.set(key, '');
  }

  // console.log(hm);

  let resultString = '';
  for (let i = 0; i < string.length; i++) {
    let value;
    try {
      value = hm.get(string[i]);
    } catch (error) {}
    if (value !== undefined) {
      resultString += string[i];
      hm.delete(string[i]);
    }
  }

  return resultString;
}

let testString = 'google all that you think can think of';
// console.log(removeDupes(testString));

function isPalindrome(string) {
  let hm = new HashMap();
  for (let i = 0; i < string.length; i++) {
    let key = string[i];
    let value;
    try {
      value = hm.get(key);
    } catch (error) {}
    if (value !== undefined) {
      hm.set(key, ++value);
    } else {
      hm.set(key, 1);
    }
  }

  let numOdds = 0;
  for (let i = 0; i < string.length; i++) {
    let key = string[i];
    let value = hm.get(key);
    let isOdd = value % 2 > 0;
    if (isOdd) {
      numOdds++;
    }
  }

  return numOdds <= 1;
}

let testString2 = 'd0tet0d';
// console.log(isPalindrome(testString2));

function stringToHashMap(string) {
  let hm = new HashMap();
  for (let i = 0; i < string.length; i++) {
    let key = string[i];
    let value;

    try {
      value = hm.get(key);
    } catch (err) {}
    if (value !== undefined) {
      hm.set(key, ++value);
    } else {
      hm.set(key, 1);
    }
  }

  return hm;
}

function anagram(words) {
  let resultsHash = new HashMap();
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let key = word.split('').sort().join(''); // aest
    let value = resultsHash.get(key);
    resultsHash.set(key, [...value, word]);
  }

  return resultsHash;
}

let wordsArray = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];
let results = anagram(wordsArray);
console.log(results.values());

// {
//  aest: [east, teas, eats],
//  acrs: [cars, arcs],
//  acer: [acre, race],
// }