var arr = [1,2,3];
console.log(arr.some(value => value > 2));

const some = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)){
      return true;
    }
  }
  return false;
}

const hasEvenNumber = (arr) => {
  return arr.some(value => value % 2 === 0);
}
console.log(hasEvenNumber([1, 7, 8, 0]));

const allLowerCase = (arr) => {
  return arr.every(value => value ===value.toLowerCase());
};
console.log(allLowerCase(['syuT']));
console.log(allLowerCase(['this is really nice']));
console.log(allLowerCase(['this is Really nice']));
let string = 'TRyU';
console.log(string.toLowerCase());

const allArrays = (arr) => {
  // return arr.every(value => Array.isArray(value)); Below also works
  return arr.every(Array.isArray);
};
console.log(allArrays([[1], [2], [3, 4]]));
console.log(allArrays([[1], [2], [3, 4], {}]));
console.log(allArrays([[1], [2], [3, 4], [3, [2, 4]]]));



/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr){
  return arr.some(value => value % 2 !== 0)
}
console.log(hasOddNumber([1,2,2,2,2,2,4])) // true
console.log(hasOddNumber([2,2,2,2,2,4])) // false


/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

function hasAZero(num){
  let numArr = num.toString().split('');
  console.log(numArr)
  return numArr.some(value => Number(value) === 0);
}
console.log(hasAZero(3332123213101232321)) // true
console.log(hasAZero(1212121)) // false
/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

function hasOnlyOddNumbers(arr){
  return arr.every(value => value % 2 !== 0);
}
console.log(hasOnlyOddNumbers([1,3,5,7]))// true
console.log(hasOnlyOddNumbers([1,2,3,5,7])) // false
/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

function hasNoDuplicates(arr){
  // let obj = {};
  // for (let i = 0; i < arr.length; i++) {
  //   if (obj[arr[i]]) return false;
  //   else obj[arr[i]] = 'yes';
  // }
  // return true;
  return arr.every(item => arr.indexOf(item) === arr.lastIndexOf(item));
}
console.log(hasNoDuplicates([1,2,3,1])); // false
console.log(hasNoDuplicates([1,2,3])) // true
/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/

function hasCertainKey(arr, key){
  return arr.every(value => key in value);
}
var arr = [
  {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
  {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
  {title: "Instructor", first: 'Matt', last:"Lane"}, 
  {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
]
console.log(hasCertainKey(arr,'first')); // true
console.log(hasCertainKey(arr,'isCatOwner'));   // false


/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/

function hasCertainValue(arr, key, searchValue){
  return arr.every(item => item[key] === searchValue); 
}

var arr = [
  {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
  {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
  {title: "Instructor", first: 'Matt', last:"Lane"}, 
  {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
]

console.log(hasCertainValue(arr,'title','Instructor')) // true
console.log(hasCertainValue(arr,'first','Elie')); // false