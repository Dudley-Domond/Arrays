//QUESTION 1: Write a program to add up all the elements of a number array.

let arr = [5,10,15,20,25];

let sum = 5 + 10 + 15 + 20 + 25;

console.log(sum);


//QUESTION 2: Write a program to look for the user input in an array. 
//When it finds the first occurrence, display the value and the index of that value

let prompt = require('prompt-sync')()
let input = prompt('enter a number: ')

let numarray = [1,2,3,4,5,4,3,2,1]
let result =numarray.indexOf(Number(input))

console.log(result)


//QUESTION 3: Write a program to find 
//the longest element in a string array.

function longest(str){
    str = str.split(" ")
    return str.sort((a, b) => b.length - a.length)[0]
}
console.log(longest("I am a learner at PerScholas"+
                    " manifesting greatness"))