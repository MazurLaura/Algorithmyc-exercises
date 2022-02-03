'use strict';

//Alternating characters exercise on HackerRank:

function alternatingCharacters(s) {
  let deleting = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      deleting++;
    }
  }
  return deleting;
}

console.log(
  `Deleted characters: ${alternatingCharacters('AAAA')}`);

console.log(
  `Deleted characters: ${alternatingCharacters('BBBBB')}`);

console.log(
  `Deleted characters: ${alternatingCharacters('AAABBB')}`);


//Tesztelve és lefutott HackerRank-en is.


//-------------------------------------------------------------------------------------------------------------------------------------------------



//Left rotation array on HackerRank:
//'a' is the array we want to rotate and 'd' is the number of rotations
//.shift() cuts off the first element and then we push it to the end of the array, and this is how to rotate left.

function leftRotation(a, d) {
  let rotatedArray = a;
  for (let i = 0; i < d; i++) {  //a .length nem muszáj elég anélkül is.
    rotatedArray.push(a.shift());
  }
  return rotatedArray;
}

console.log(`Left rotation: ${leftRotation([1, 2, 3, 4, 5], 4)}`);

//Tesztelve és lefutott HackerRank-en is.


//------------------------------------------------------------------------------------------------------------------------------------------------


//Two Strings exercise on HackerRank:
// s1 = the first string, s2 = the second string
//If they have common character(s) it should print YES, if they don't have then NO.

function twoStrings(s1, s2) {
  let answer = '';

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        answer = 'YES';
        return answer;
      } else {
        answer = 'NO';
      }
    }
  }
  return answer;
}

console.log(`Two strings: ${twoStrings('no', 'yes')}`);

//Tesztelve és lefutott HackerRank-en is.


//------------------------------------------------------------------------------------------------------------------------------------------------


//Mini-Max Sum feladat

function miniMaxSum(arr) {
  let result = 0; let newArr = arr.sort(); //.sort az abc vagy novekvo szamsorrendbe tesz (ascending rendszer szerint)   
  for (let i = 0; i < newArr.length; i++) {
    result += newArr[i]; // resultba toltom a newArray elemeit   
  }
  let min = result - newArr[newArr.length - 1]; //kivonom a resultbol a legnagyobb elemet   
  let max = result - newArr[0]; //kivonom a resultbol a legkisebb elemet  
  console.log('Mini-Max sum: ' + min, max);
}

let array = [1, 2, 4, 8, 3, 9];
miniMaxSum(array);


//------------------------------------------------------------------------------------------------------------------------------------------------


//Camel Case exercise on hackerrank

function camelcase(s) {

  let words = 1; //Itt azért 1-el kezdődik, mert az első szó az kisbetűs most mindig, így azt nem számolná bele (a hackerrank tesztjei aszerint vannak írva.)

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      words++;
    }
  }
  return words;
}

console.log(`Camel Case: ${camelcase('saveTheWhales')}`);


//------------------------------------------------------------------------------------------------------------------------------------------------


//Diagonal Difference exercise on hackerrank

/*
[
  [1, 2, 3], [4, 5, 6], [9, 8, 9]

  [11, 2, 4], [4, 5, 6], [10, 8, -12]
]
*/

function diagonalDifference(arr) {

  let numbers = [0, 0]

  for (let i = 0; i < arr.length; i++) {

    numbers[0] += arr[i][0 + i];  //Ezel gyakorlatilag azt mondom, hogy ahányadik sorban vagyok(vagyis akárhanyadik elemét vizsgálom az array-nek), annyit adok aztán hozzá az indexhez. Tehát első sor esetében(ami a 0. eleme az array-nek) a 0. indexhez 0.t adok, második sor esetében(ami az 1. eleme az array-nek) a 0. elemhez 1-et adok... és így mindig megkapom a következő sorból az egyel arrébb levő elemet.
    numbers[1] += arr[i][arr.length - 1 - i];
  }
  return Math.abs(numbers[0] - numbers[1])
}

console.log(`Diagonal difference: ${diagonalDifference(
  [
    [11, 2, 4], [4, 5, 6], [10, 8, -12]
  ]
)}`);


//------------------------------------------------------------------------------------------------------------------------------------------------


//Making Anagrams exercise on hackerrank

function makingAnagrams(string1, string2) {
  let split = string1.split('');
  let split2 = string2.split('');
  let count = 0;
  let array1 = [];
  let array2 = [];

  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      if (string1[i] === string2[j]) {
        array1.push(string1[i]);
        array2.push(string2[j]);

        split.splice(i, 1);
        split2.splice(j, 1);
      }
    }
  }

  count = split.length + split2.length;
  console.log('Making Anagrams: ' + count);
  return { array1, array2 };
}

let result4 = makingAnagrams('abd', 'abc'); //ab marad, dc töröl
//console.log(result4);

let result5 = makingAnagrams('abdcde', 'abcxy'); //abc marad, ddexy töröl
//console.log(result5);


//----------- MÁSOK MEGOLDÁS -----------

//forEach-es megoldás
function makingAnagrams2(string1, string2) {
  let split1 = string1.split('');

  split1.forEach((character) => {
    // if an element of 'split1' is in string2, remove it from both strings
    if (string2.includes(character)) {
      string1 = string1.replace(character, '');
      string2 = string2.replace(character, '');
    }
  });
  return string1.length + string2.length;
}

let result = makingAnagrams2('cde', 'dcf'); //cd marad, ef töröl
console.log('M.A. forEach: ' + result);

let result2 = makingAnagrams2('abcs', 'abc'); //abc marad, s töröl
console.log('M.A. forEach: ' + result2);

let result3 = makingAnagrams2('cde', 'abc'); //c marad, deab töröl
console.log('M.A. forEach: ' + result3);


//------------------------------------------------------------------------------------------------------------------------------------------------


//Strong Password exercise on hackerrank

function minimumNumber(n, password) {

  let number = 0, special = 0, lower = 0, upper = 0;
  let minChar = 6;
  let extra = "!@#$%^&*()-+";
  let numbers = "0123456789";
  let lower_case = "abcdefghijklmnopqrstuvwxyz";
  let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let splitted = password.split('');


  for (let i = 0; i < splitted.length; i++) {
    if (!extra.includes(splitted[i])) {
      special = 1;
    } else if (!numbers.includes(splitted[i])) {
      number = 1;
    } else if (!lower_case.includes(splitted[i])) {
      lower = 1;
    } else if (!upper_case.includes(splitted[i])) {
      upper = 1;
    } else if (splitted.length < minChar) {
      return (minChar - splitted.length) - (4 - number - special- upper - lower);
    }
  }
  return 4 - number - special- upper - lower;
}

//console.log(`${minimumNumber(11, '#HackerRank')} hellomi`);


//------------------------------------------------------------------------------------------------------------------------------------------------


//Birthday Cake Candles exercise on hackerrank

function birthdayCakeCandles(candles) {

  let highest = 0; 
  let countCandle = 0;

  for (let i = 0; i < candles.length; i++) {
      if (highest < candles[i]) {
          highest = candles[i]; 
      } 
  }
  
  for (let i = 0; i < candles.length; i++) {
      if (highest === candles[i]) {
          countCandle++;
      }
  }
  return countCandle;
}

console.log(`Candles: ${birthdayCakeCandles([4,4,1,3])}`);


//------------------------------------------------------------------------------------------------------------------------------------------------


//Highest Scoring Word on codewars

function high(x){
  let highestScore = 0;
  let word = '';
  let chars = x.split(' ');
  //let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  
  for (let i = 0; i < chars.length; i++) {
    let wordScore = 0;
    let oneWord = chars[i];
    
    for (let j = 0; j < oneWord.length; j++) {
      wordScore += oneWord.charCodeAt(j);
    }
    //console.log(oneWord + '---' + wordScore);
    if (wordScore > highestScore) {
        highestScore = wordScore;
        word = oneWord;
      }
  }
  return word;
}

console.log(`Volcano string: ${high('what time are we climbing up the volcano')}`);
console.log(`Taxi string: ${high('man i need a taxi up to ubud')}`);
console.log(`semynak string: ${high('take me to semynak')}`);
console.log(`aaa string: ${high('aaa b')}`);

//IndexOf()-os megoldás:

function high(x){

  let scores = [];
  let words = x.split(' ');
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  
  for (let i = 0; i < words.length; i++) {
    let wordScore = 0;
    let oneWord = words[i];
    
    for (let j = 0; j < oneWord.length; j++) {
      wordScore += alphabet.indexOf(words[i][j])+1;
    }
    scores.push(wordScore);
  }
  
  let maxScore = 0;
  let index = 0;
  
  for (let k = 0; k < scores.length; k++) {
    if (scores[k] > maxScore) {
        maxScore = scores[k];
        index = k;
      }
  }
  return words[index]
}

console.log(`indexOf() solution: ${high('what time are we climbing up the volcano')}`);
console.log(`indexOf() solution: ${high('take me to semynak')}`);


//------------------------------------------------------------------------------------------------------------------------------------------------


//Simple Pig Latin exercise on codewars

//concat() --> we can add character(s) to the end of a string



function pigIt(string){
  
  let words = string.split(' ');
  let newStringArray = []

  for (let i = 0; i < words.length; i++) {
    if(!words[i].match(/^[.,:!?]/)) {
      let ay = 'ay';
      let oneWord = words[i].concat(words[i][0]).slice(1).concat(ay)  
      newStringArray.push(oneWord);
    } else {
      let oneWord = words[i];
      newString.push(oneWord);
    }
  }
  return newStringArray.join(' ');
}

console.log(`Pig Latin: ${pigIt('Pig latin is cool !')}`);

















/*
function SQLupdate (name, email, password) {
  let filter = [];

  let SQLupdateQuery = 'UPDATE user SET ';
  if ( name ) {
    if ( filter.length > 0) {
      SQLupdateQuery += ', ';
    } 
      SQLupdateQuery += 'name = ? ';
      filter.push(name);
  }
  console.log(email);

  if ( email !== undefined ) {
    if ( filter.length > 0) {
      SQLupdateQuery += ', ';
    }
      SQLupdateQuery += 'email = ? ';
      filter.push(email);
  }

  if ( password ) {
    if ( filter.length > 0) {
      SQLupdateQuery += ', ';
    }
      SQLupdateQuery += 'password = ? ';
      filter.push(password);
  }

  SQLupdateQuery += 'WHERE id = ?'
  return SQLupdateQuery;
}


console.log(SQLupdate('Gizi', 'gizike@gmail.com'));

*/
