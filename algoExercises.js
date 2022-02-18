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

function leftRotation(array, rotNumber) {
  let rotatedArray = array;
  for (let i = 0; i < rotNumber; i++) {  //a .length nem muszáj elég anélkül is.
    rotatedArray.push(array.shift());
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
      return (minChar - splitted.length) - (4 - number - special - upper - lower);
    }
  }
  return 4 - number - special - upper - lower;
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

console.log(`Candles: ${birthdayCakeCandles([4, 4, 1, 3])}`);


//------------------------------------------------------------------------------------------------------------------------------------------------


//Highest Scoring Word on codewars

function high(x) {
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

function high(x) {

  let scores = [];
  let words = x.split(' ');
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'

  for (let i = 0; i < words.length; i++) {
    let wordScore = 0;
    let oneWord = words[i];

    for (let j = 0; j < oneWord.length; j++) {
      wordScore += alphabet.indexOf(words[i][j]) + 1;
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



function pigIt(string) {

  let words = string.split(' ');
  let newStringArray = []

  for (let i = 0; i < words.length; i++) {
    if (!words[i].match(/^[.,:!?]/)) {
      let ay = 'ay';
      let oneWord = words[i].concat(words[i][0]).slice(1).concat(ay)
      newStringArray.push(oneWord);
    } else {
      let oneWord = words[i];
      newStringArray.push(oneWord);
    }
  }
  return newStringArray.join(' ');
}

console.log(`Pig Latin: ${pigIt('Pig latin is cool !')}`);

//-------------------------------------------------------------------------------------------------------------------------------------------------


//String array duplicates exercise on codewars

function stringArrayDuplicates(string) {

  let solution = [];

  for (let i = 0; i < string.length; i++) {
    let newArray = []; //minden új ciklusnál ez újra üres array lesz

    for (let j = 0; j < string[i].length; j++) {
      if (string[i][j] !== string[i][j + 1]) {
        newArray.push(string[i][j]);
      }
    }
    let joinedArray = newArray.join('');
    solution.push(joinedArray); //mindig az adott ciklusban levő szó join-olt verziója kerül bele
  }
  return solution;
}

console.log(`New array: ${stringArrayDuplicates(["abracadabra", "allottee", "assessee"])}`);


//Anh megoldása:
function dup(stringArray) {
  let newArr = [];

  for (let i = 0; i < stringArray.length; i++) {
    let word = '';

    for (let j = 0; j < stringArray[i].length; j++) {
      if (word.length === 0) {
        word += stringArray[i][j];
      } else if (word[word.length - 1] !== stringArray[i][j]) {
        word += stringArray[i][j];
      }
    }
    newArr.push(word);
  }
  return newArr;
};

let array6 = ["abracadabra", "allottee", "assessee"];
let result6 = dup(array6);
console.log(result6);
let hello = 'a';

console.log(hello.length - 1); //minidg számot ad vissza
console.log(hello[hello.length - 1]); //így viszont array-hez viszonyítva a benne levő indexénél levő karaktert adja vissza

//-------------------------------------------------------------------------------------------------------------------------------------------------

//Find the unique number exercise on codewars

function uniqueNumber(array) {
  let unique = [];
  let sorted = array.sort();
  console.log(`Sorted array for unique nmbr exercise: ${sorted}`);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[0] !== sorted[1] && unique.length === 0) {
      unique.push(sorted[0]);
    } else if (sorted[sorted.length - 1] !== sorted[sorted.length - 2] && unique.length === 0) {
      unique.push(sorted[sorted.length - 1]);
    }
  }
  return unique;
}

console.log(`Unique number: ${uniqueNumber([3, 10, 3, 3, 3])}`);

/*  VALAMIÉRT CODEWARS-ON EZ NEM FUT LE...?
function findUniq(arr) {
  let unique = [];
  let sorted = arr.sort()
  
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[0] !== sorted[1] && unique.length === 0) {
      unique.push(sorted[0])
    } else if (sorted[sorted.length-1] !== sorted[sorted.length-2] && unique.length === 0) {
      unique.push(sorted[sorted.length-1]);
    }
  }
  return unique;
}
*/





//_____________________________________________________________ ISMÉTLŐS GYAKORLÁS __________________________________________________________________________

console.log('--------------------------------------------------------');


//ALTERNATING cHARACTERS:

function alternatingChars(string) {
  let deletedChars = 0;
  let splitted = string.split('');
  let characters = ''

  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i] === splitted[i + 1] && characters.length === 0) {
      deletedChars++;
      characters += splitted[i]
    } else if (characters[characters.length - 1] !== splitted[i]) {
      characters += splitted[i]
    }
  }
  deletedChars = string.length - characters.length;
  return (characters + deletedChars);
}

console.log(`1. Alternating: ${alternatingChars('AAABBB')}`); //Elvileg 4 a deletions
console.log(`1. Alternating: ${alternatingChars('AABBAAB')}`); //Elvileg 3 a deletions


//Írassuk ki új string-be az 'a' betűvel kezdődő szavakat.

// Az alma alja lukas.

function StringWithA(string) {
  let solution = '';
  let splitted = string.split(' ');


  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i][0] === 'a' || splitted[i][0] === 'A') {
      solution += splitted[i] + ' ';
    }
  }
  return solution;
}

console.log(`2. Strings with 'A': ${StringWithA('Az alma alja lukas.')}`);


// Array Left Rotation:

// [1,2,3,4,5] --> [3,4,5,1,2] --> Tehát kettővel toljuk balra az egészet

function arrayLeft(array, rotNumber) {

  for (let i = 0; i < rotNumber; i++) {
    array.push(array.shift());
  }
  return array;
}

console.log(`3. Left rotation: ${arrayLeft([1, 2, 3, 4, 5], 2)}`);

//---------------------------------------------------

//Array Rigth Rotation:

//[1,2,3,4,5] --> [4, 5, 1, 2, 3]

function rightRotation(array, rotNumber) {
  for (let i = 0; i < rotNumber; i++) {
    array.unshift(array.pop()); //az unshift előre teszi a beadott elemet pl.: van array --> ['Geeks', 'for', 'geeks'] array.unshift('kiscica') --> a 'kiscica' lesz az első elem az arry-ben.
  }
  return array
}

console.log(`4. Right rotation: ${rightRotation([1, 2, 3, 4, 5], 2)}`);

//---------------------------------------------------


//Two Strings:

function yesOrNo(stringA, stringB) {
  let answer = '';

  for (let i = 0; i < stringA.length; i++) {
    for (let j = 0; j < stringB.length; j++) {
      if (stringA[i] === stringB[j]) {
        answer = 'YES';
      } else {
        answer = 'NO';
      }
    }
  }
  return answer;
}

console.log(`5. Two String: ${yesOrNo('kutya', 'macska')}`);
console.log(`5. Two String: ${yesOrNo('kaja', 'pele')}`);

/*
The second biggest
Create a function called secondBiggest that takes an array of integers as an input, and returns the second biggest number in that array.

Example case:

secondBiggest([5, 1, 2, 7, 9, 2, 4]);
Should return 7.

-------------------------------------------------
*/

function secondBiggest(array) {
  let max = 0;
  let secondMax = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      secondMax = max;
      max = array[i];
    }
  }
  return secondMax;
}

console.log(`6. Second Biggest number: ${secondBiggest([5, 1, 2, 7, 9, 9, 2, 4])}`);


/*
Unique Characters
Create a function called uniqueCharacters that takes a string as an input and returns an array / list with the unique letters of the given string.

Example case:

uniqueCharacters("anagram");
Should return:

["n", "g", "r", "m"]

------------------------------------------------
*/

//----  OBJECTES MEGOLDÁS

function uniqueCharacters(string) {
  let resultObj = {};
  let resultArr = [];

  for (let i = 0; i < string.length; i++) {
    if (resultObj[string[i]]) {
      resultObj[string[i]]++;
    } else {
      resultObj[string[i]] = 1;
    }
  }

  for (const [key, value] of Object.entries(resultObj)) {
    if (value === 1) {
      resultArr.push(key);
    }
  }

  return resultArr;
}
console.log(`7. Unique characters: ` + uniqueCharacters('anagram'));   // [n, g, r, m]
console.log(`7. Unique characters: ` + uniqueCharacters('llobello'));  // [b, e]
console.log(`7. Unique characters: ` + uniqueCharacters('element'));  // [l, m, n, t]


// ----  FOR MEGOLDÁS

function uniqueChars(string) {  //hello
  let resultArr = [];

  for (let i = 0; i < string.length; i++) { //hello
    let count = 0;

    for (let j = 0; j < string.length; j++) {   // hello
      if (string[i] === string[j]) {
        count++;
      }
    }
    if (count === 1) {
      resultArr.push(string[i]);
    }
  }
  return resultArr;
}

console.log('7. Unique 2.0: ' + uniqueChars('ellobeillo'));  // [b, i]

//------------------------------------------------

/*
Remove duplicates
Create a function called removeDuplicates that

takes an array of integers (array) as an input,
returns a result array / list where all the elements are unique
Example cases:

removeDuplicates([1, 1, 2, 2, 3]);
Should return [1, 2, 3]

removeDuplicates([1, 2, 3]);
Should return [1, 2, 3]

removeDuplicates([]);
Should return []
*/

function removeDuplicates(array) {
  let result = [];

  if (array.length === 0) {
    return [];
  }

  array.forEach(number => {
    if (!result.includes(number)) {
      result.push(number);
    }
  })

  return result;
}

console.log(`8. Remove duplicates: ${removeDuplicates([1, 2, 2, 3])}`);
console.log(`8. Remove duplicates: ${removeDuplicates([1, 1, 2, 2, 3])}`);


//---------------------------------------------------------------------


// [1,2,5,8,10,45] --> osztható 2 vagy 3-al

function dividedBy(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0 || array[i] % 2 === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(`9. Divided By: ${dividedBy([1, 2, 5, 8, 10, 45])}`);


//--------------------------------------------------------------------


// [1,2,5,8,10,45] --> 3 legnagyobb számot kiíratni

function threeBiggest(array) {
  let answer = []

  /*
  let sorted = array.sort((a, b) => a - b);     ----> Így növekvő sorrendbe teszi.
  console.log(sorted);
  let solution = sorted.slice(sorted.length-3, sorted.length)
  answer.push(solution)
  return answer;
  */

  let sorted = array.sort((a, b) => b - a);   // Így csökkenő sorrendbe tesz.
  //console.log(sorted);
  let solution = sorted.slice(0, 3)
  answer.push(solution)
  return answer;
}

console.log(`10. Three biggest: ${threeBiggest([1, 2, 5, 8, 10, 45])}`);

//-----------------------------------------------------------------------


// ['', 'abcdhegahiopédkfhebcnsmsldjfiroema', '', 'alma', 'körte', ''] --> 0 és 34 karakter hosszút tenni új array-be

function longString(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length === 0 || array[i].length === 34) {
      newArray.push(array[i])
    }
  }
  return newArray;
}

console.log(`11. Long String: ${longString(['', 'abcdhegahiopédkfhebcnsmsldjfiroema', '', 'alma', 'körte', ''])}`);
console.log(longString(['', 'abcdhegahiopédkfhebcnsmsldjfiroema', '', 'alma', 'körte', '']));


//----------------------------------------------------

//Egy szó leggyakrabban ismételt betűit kiszedni: 'kakas' vagy 'ortodox'

function motsCommon(string) {

}

console.log();

//------------------------------------------------

//Reverse words -> string az inputban -> a szavakon belül a karaktereket megfordítani, de a szavak sorrendjét nem!
//Figyelni kell az upper és LowerCase-re!
//  reverseWords("lleW ,enod taht saw ton taht drah"); ---> Well done, that was not that hard.

function reverseWords(string) {
  let answer = [];

  let splitted = string.split(' '); //1. split space-enként

  for (let i = 0; i < splitted.length; i++) { //végig megyek a string-en, tehát a szavakat vizsgálom
    let word = '';
    for (let j = splitted[i].length-1; j >= 0; j--) { //végigmegy a szavakon, de az adott szó utolsó karakterétől visszafelé a 0.-ig
      word += splitted[i][j]; //a word-be mindig belepusholom az adott betűt (első kötben a 'W', aztán az 'e' ...stb)
    }
    answer.push(word); //az így kapott új array-t az answer-be pusholom
  }
  return answer.join(' '); //és szóközökkel join-olom, mert most minden szó külön van vesszővel elválasztva
}

console.log(`Reverse words: ${reverseWords("lleW ,enod taht saw ton taht drah")}`);


//------------------- MÁSIK MEGOLDÁS -----------------------

function reversedWords(string) {
  let answer = [];

  let splitted = string.split(' ');

  for (let i = 0; i < splitted.length; i++) {
    let wordArray = splitted[i].split('');
    wordArray.reverse();
    answer.push(wordArray.join(''));
  }
  return answer.join(' ');
}

console.log(`Reverse words: ${reversedWords("lleW ,enod taht saw ton taht drah")}`);


//------------------------------------------------

function divisibleSumPairs(array, number) {
  let answer = 0;

  for (let i = 0; i < array.length; i++) {  //végig megyek az array hosszán
    for (let j = 1; j < array.length; j++) {   //újra, de most már az egyel arréb levő indexen levő elemet vizsgálom
      if (array[i] < array[j] && number%(array[i] + array[j]) === 0) {  //ha az i kisebb, mint a j és a 10 osztható az ő összegükkel
        answer++;
      }
    }
  }
  return answer;
}

console.log(`Divisible Pairs: ${divisibleSumPairs([1, 2, 3, 4, 5], 10)}`);

//-------------------------------------------------

// számokból álló array-t kap meg --> [1, 2, 3, 4, 5] --> annak a 3 számnak az indexét kell kiadnia, amelyeknek az összegük a legkisebb.

function threeSum(array) {

  let resultArray = [];
  let array2 = [...array];
  let sorted = array2.sort((a,b) => a - b); //5, 100, 200, 450

  for (let i = 0; i < 3; i++) {
    resultArray.push(array.indexOf(sorted[i]))

    //console.log(`sorted: ${array.indexOf(sorted[i])}`);  //1. körben: 0, 2. körben: 1, 3. körben: 2 ----> és ezeket mindig push-olom a result-ba
  }
  return resultArray;
}

console.log(`Three sum: ${threeSum([100, 450, 200, 5])}`);

//--------------------------------------------------




