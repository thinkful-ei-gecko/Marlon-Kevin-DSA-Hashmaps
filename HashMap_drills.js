'use strict';

const HashMap = require('./HashMap');

function main() {
  let lotr = new HashMap(100);

  lotr.set('Hobbit', 'Bilbo');
  lotr.set('Hobbit', 'Frodo');
  lotr.set('Wizard', 'Gandalf');
  lotr.set('Human', 'Aragorn');
  lotr.set('Elf', 'Legolas');
  lotr.set('Maiar', 'The Necromancer');
  lotr.set('Maiar', 'Sauron');
  lotr.set('Ringbearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfEleven', 'Arwen');
  lotr.set('Ent', 'Treebeard');

  // console.log(lotr.get('Hobbit'));
  //No not all of the values set into the hash table were properly hashed
  //'Maiar' and 'Hobbit' could not be retrieved due to a collision from repeat values
  //The _hashString function % capacity is hashing to the same index overwriting previous set values
  //Capacity is 24 due to one resize

  return lotr;
}

function display(arr){
  arr.map(item => {
    if (item) {
      console.log(item);
    }
  });
}


display(main()._hashTable);

console.log('Elf', HashMap._hashString('Elf')%8);
console.log('Ent', HashMap._hashString('Ent')%8);
console.log('Human', HashMap._hashString('Human')%8);
console.log('Wizard', HashMap._hashString('Wizard')%8);
console.log('Hobbit', HashMap._hashString('Hobbit')%8);
console.log('LadyOfLight', HashMap._hashString('LadyOfLight')%8);
console.log('Maiar', HashMap._hashString('Maiar')%8);
console.log('Ringbearer', HashMap._hashString('RingBearer')%8);
console.log('HalfElven', HashMap._hashString('HalfElven')%8);