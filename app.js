// function greeting(name, callback) {
//     let sentence = 'Hello, my name is' + name;

//     return sentence;

//     let otherSentence= callback();

//     return sentence + otherSentence;
// }

// function anotherGreeting(){
//     let sentence = 'I forgot my last name';
    
//     return sentence;
// }

// let myName = 'Steven';
// console.log(greeting(myName, anotherGreeting));


// function printArray(array, callback){
//     for (let i =0; i < array.length; i++){
//         let number = array[i];
//     }

//         console.log(number);
// }    

//         callback(array);
// }


// function printArrayAgain(array) {
//     for (let i = 0; i < array.length; i++){
//         let number = array[i];

//         console.log(number);

//     }
// }

// const numbersArray = [1,2,3,4,5,9,8,7,6]

// printArray(numberArray, printArrayAgain);



// function calculator(num1, num2, callbackOne, callbackTwo){

//     let result = callbackOne(num1,num2) + callbackTwo(num1,num2);

//     return result;
// }

// function addNumbers(num1, num2) {

//     let result = num1 + num2;

//     return result;

// }
// function subractNumbers(num1, num2){


// }

// console.log(calculator(5,77, addNumbers, subtractNumbers));


// function spiderMan ( web, climb, callbackOne, callbackTwo){
//     let result = web + climb;

//     return result:
// }
// console.log()

// function sonic(superPowerOne, superPowerTwo){
//     let allSuperPowers = superPowerOne() + ' and ' + superPowerTwo();

//     return allSuperPowers;

// }

// function superSpeed() {
//     let power = 'I can run 100 mph';

//     return power;
// }

// function superSpin(){
//     let spin = 'I can spin 1000 mph';

//     return spin;

// }

// console.log(sonic(superSpeed, superSpin));

// function blastOff() {
//     let num = 0;

//     for (let i = 10; i >= num; i--){
//         console.log(i); // 10, 9, 8, 7, ....
//     }
//     console.log('BLAST OF!!!!')
// }

// setTimeout(blastOff, 5000);

// // make a function that prints your name
// // setTimeout and pass in function and a time (5000)

// function steven(){
//     console.log('Steven')
// }
// setTimeout(steven, 5000);

// // setTimeout

// let myNameTwo = 'Steven';
// setTimeout(function(){
//     printName{myNameTwo};

// }, 5000);


// Iterators
// forEach

// const collectables = ['Bomag', 'CMI Corp', 'Wirtgen','Catepillar'];

// collectables.forEach(function(element) {
//     console.log(element);
// });

// collectables.forEach(element => {
//     if(element.length > 6) {
//     console.log(element);
// }
    
// });

// map
const someNumbers = [24, 65, 347, 34];

const addFive = someNumbers.map(element =>{
    return element + 5;
});

console.log(addFive);

// filter
const filteredNumbers = someNumbers.filter(element =>{
    if (element > 50) {
        return element;
    }
});

console.log(filteredNumbers);

// [65, 347]