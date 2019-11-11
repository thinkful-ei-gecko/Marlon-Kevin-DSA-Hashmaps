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
    } catch (error) { }
    if (value !== undefined) {
      hm.set(key, ++value);
    }
    else {
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
  let hm = new HashMap;
  for (let i = 0; i < string.length; i++){
    let key = string[i];
    let value;

    try{
      value = hm.get(key);
    }
    catch(err){}
    if(value !== undefined){
      hm.set(key, ++value);
    }
    else{
      hm.set(key, 1);
    }
  }
  
  return hm;
}

// function isAnagram(string1, string2){
//   for (let i = 0; i < hm.length; i++){
//     let key = string[i];
//     let value;
//     try{
//       value = hm.get(key);
//     }
//     catch(err){
//       return false;
//     }
//   }
// }

function anagram(words){
  let resultshm = new HashMap;
  while(words.length){
    resultshm.set(words[0], []);
    for(let i = 0; i < words.length; i++) {
      let hm1 = stringToHashMap(words[i]);
      let wordToCheck1 = words[i];
      resultshm.set(wordToCheck1, []);
  
      for(let j = i + 1; j < words.length; j++){
        let wordToCheck2 = words[j];
        let hm2 = stringToHashMap(words[j]);
        for(let k = 0; k < wordToCheck1.length; k++){
          let key = wordToCheck1[k];
   
          let value = hm1.get(key);
          let value2;
  
          try {
            value2 = hm2.get(key);
          }
          catch(error){
            //not an anagram
          }
          if(value === value2){
            resultshm.get(wordToCheck1).push(wordToCheck2);
            words.slice(0, j);
          }
        }
      }
      words.slice(0, i);
    }
  }


  return resultshm;
}

let wordsArray = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];

console.log(anagram(wordsArray));

