// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// describe(fibonacciMe, ()=> {
//     it('Is a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence', ()=> {
//     expect(fibonacciMe(6)).toEqual([1, 1, 2, 3, 5, 8])
//     })
//     })


// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.
//Psuedo Coding
//First I need to create a function 
// I need the function to take in a number and return it as an array 
//I need the array to spit out the fibonacci sequence starting from 2 with the end point being the number I input.
// I need more than one function to factor this out, this has escalated to a class. 

const fibonacciMe = function(num) {
    var fib = [];
    num < 2 ? fib.push(num) : fib.push(fibonacciMe(num-1) + fibonacciMe(num-2));
    return fib;
};


// var num1 = 1
// const fibonacciMe = (input) =>{
//     let newArr = []  
//     for (let index = 0; index < input.length; index++) {
//     return newArr((num1 -1) + (num1 -2))
//     }
//     return newArr.push(fibonacciMe)

// }


describe(fibonacciMe, ()=> {
    it('Is a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence', ()=> {
    expect(fibonacciMe(6)).toEqual([1, 1, 2, 3, 5, 8])
    })
    })


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// Expected output: [-9, 7, 9, 199]
// describe(sortThisOut, ()=> {
//     it('takes in an array and returns a new array of only odd numbers sorted from least to greatest', ()=> {
//     expect(sortThisOut(fullArr1)).toEqual([-9, 7, 9, 199])
//     })
//     })

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

// var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// b) Create the function that makes the test pass.
//Pseudo Code:
// I need a function that takes in arrays  const sortThisOut  = [] ==>{}
// I need that function to return only numbers using typeOf()
// I need that function to return an array with only odds  using % 2 == 1
// I need the function to sort the odd numbers in my array from least to greatest using Math.max()

const sortThisOut = (array) => {
    let newArr = []
    for(let i=0; i<array.length; i++){
      if(array[i] % 2 !== 0){
        newArr.push(array[i])
      } else if(array[i] !== typeof(String)){

      }
      
    }
    return newArr.sort((a,b) => a-b)
  }
  
// const sortThisOut = (array) =>{
// let newArray = []
// for (let index = 0; index < array.length; index++) {
//     if(array % 2 === 1){
//         newArray.push(array)
//     }
// }
// return newArray.typeOf(Number)
// }
// // console.log(sortThisOut(fullArr2));

describe(sortThisOut, ()=> {
    it('takes in an array and returns a new array of only odd numbers sorted from least to greatest', ()=> {
    expect(sortThisOut(fullArr1)).toEqual([-9, 7, 9, 199])
    })
    })

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// describe(iCannot, ()=> {
//     it('is function that takes in an array and returns an array of the accumulating sum', ()=> {
//     expect(iCannot(numbersToAdd1)).toEqual([2, 6, 51, 60])
//     })
//     })

// var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

// var numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]

// var numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.

const iCannot = (num1) => {
    let array =[];
    for (let index = 2; index <= num1; index++) {
        blip[i] = blip[i - 1] + blip[i - 2]
        array.push(fib(i))
        const element = array[index];  
    }
    return array.push(iCannot)
}

describe(iCannot, ()=> {
    it('is function that takes in an array and returns an array of the accumulating sum', ()=> {
    expect(iCannot(numbersToAdd1)).toEqual([2, 6, 51, 60])
    })
    })

// //Psuedo Codding:
// First I need to make a function that takes in an array
// I need to much like the fibonacci sequence have the array go through a for loop
// I need to iterate the numbers in the array through an equation that will add the current number to the number of the previous index. 
// I need it to return in the form of an array.

