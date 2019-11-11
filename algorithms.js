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
