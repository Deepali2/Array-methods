/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    let doublearr = [];
    arr.forEach(element=> {
        doublearr.push(element * 2);
    });
   return doublearr; 
}

console.log(doubleValues([1,2,3])) // [2,4,6]
console.log(doubleValues([5,1,2,3,10])) // [10,2,4,6,20]
/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
  let evensArr = [];
    arr.forEach(element => {
      if (element % 2 === 0) {
        evensArr.push(element);
      }
    });
    return evensArr;
}
console.log(onlyEvenValues([1,2,3]))// [2]
console.log(onlyEvenValues([5,1,2,3,10])) // [2,10]
/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
  let firstLastArr = [];
  arr.forEach(element => {
    firstLastArr.push(element[0] + element[element.length - 1]);
  });
  return firstLastArr;
}
console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy'])) // ["ct", "mt", "tm", "uy"]
console.log(showFirstAndLast(['hi', 'goodbye', 'smile'])) // ['hi', 'ge', 'se']
/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
  let addKeyValueArr = [];
  arr.forEach(element => {
    let obj = {};
    let key1Arr = Object.keys(element);
    obj[key1Arr[0]] = element.name;
    obj[key] = value;
    addKeyValueArr.push(obj);
  });
  return addKeyValueArr;
}
console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'))
/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/


//helper function to check if a character is a vowel and if it is then which vowel
const whichVowel = (charac) => {
   const vowels = ['a', 'e', 'i', 'o', 'u'];
   let char = charac.toLowerCase();
   for (let i = 0; i < vowels.length; i++) {
     if (vowels[i] === char) {
       return vowels[i];
     }
   }
   return false;
};


function vowelCount(str){
  let obj = {};
   for (let i = 0; i < str.length; i++) {
     let charac = whichVowel(str[i]);
     if (charac !== false) {
       if (obj[charac]) obj[charac]++;
       else obj[charac] = 1;
     }
   }
   if (Object.keys(obj).length === 0) return 'There are no vowels in the given string';
   else return obj;
}

console.log(vowelCount('I Am awesome and so are you'));


/*
Below works too
function vowelCount(str){
    var splitArr = str.toLowerCase().split("");
    var obj = {};
    var vowels = "aeiou";

    splitArr.forEach(function(letter){
        if(vowels.indexOf(letter) !== -1){
            if(obj[letter]){
                obj[letter]++;
            } else{
                obj[letter] = 1;
            }
        }
    });
    return obj;
}

*/