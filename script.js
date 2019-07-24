'use strict';
//#1 
function searchArrayWord(word, array) {
    for(let i = 0; i < array.length; i++) {
        if(array.indexOf(word) != -1) {
            return true;
        }
        return false;
    } 
}
let animals = ['Кот', 'Собака', 'Жираф'];
console.log(searchArrayWord('Кот', animals));

//#2

function getAverage(arraynum) {
    let sum = 0;
    for(let i = 0; i < arraynum.length; i++) {
        sum += arraynum[i];
    }
    let average = sum / arraynum.length;
    return Math.round(average * 100) / 100;
}
let arr = [1, 2, 3, 7, 6, 9]; 
console.log(getAverage(arr));

//#3 the first variant
function reverse(arrayrev) {
    for(let i = arrayrev.length - 1; i >= 0; i--) {
    arrayrev.push(arrayrev[i]);
    }
    arrayrev.splice(0, arrayrev.length/2);
    return arrayrev;
}
let arr2 = [1, 3, 5, 6, 7, 9];
console.log(reverse(arr2));
/* the second variant 
function reverse(arrayrev) {
    for(let i = arrayrev.length - 1; i >= 0; i--) {
    arrayrev.push(arrayrev[i]);
    }
    for(let j = 0; j < arrayrev.length - 1; j++) {
    arrayrev.shift(arrayrev[j]);
    }
    return arrayrev;
}
let arr2 = [1, 3, 5, 6, 7, 9];
console.log(reverse(arr2));
*/

//#4 
let name =  {html:'HTML', css: 'CSS', js: 'ECMA'}; 
function getArray(originalobj) {
let arrayfrom = [];
for(let key in originalobj) {
    arrayfrom.push(originalobj[key]);
}
return arrayfrom;
}
console.log(getArray(name));

//#5 
let order = {
    'name': 'John',
    'phone': 13459468745,
    'address': '7146 Green St. Newnan, GA 30263',
    'totalprice': 830,
    'totalweight': 2700,
    'purchased goods': {
        'cap': {'price': 100, 'weight': 200},
        'spoon': {'price':30, 'weight': 100},
        'pot': {'price':550, 'weight': 2000},
        'mud': {'price':550, 'weight': 400}
    } 
}
