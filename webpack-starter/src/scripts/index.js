// let and var can both be used to declare variables,
// however, let restrict the variable to the block or function 
// While var restricts makes it accessbile in the whole code.
// eg. let re = 10; and var re = 10; will produce different results
// in a function.

// Rest Parameters
// function carsSend(...sendIt) {
//     sendIt.forEach(id => console.log(id));
// }
// Calling the function carsSend
// carsSend(111, 122, 444, 555, 667, 88);

// /////////////////////
// Declaring an Array
// let carMiles = [1, 2, 444, 555, 667, 88];

// Array Destructuring
// let [car1, car2, car3, car4, car5, car6] = carMiles;

// console.log( car1, car2, car3, car4, car5 );
// /////////////////

// Array Destructuring with extra variables
// let carMiles = [1, 2, 3, 4, 5, 6];
// let car1, remainingCars;
// [car1, ...remainingCars] = carMiles;
// console.log(car1, ...remainingCars);

// // remaining variable gets everything.
// let carMiles = [1, 2, 3, 4, 5, 6];
// let car1, remainingCars;
// [ ...remainingCars] = carMiles;
// console.log(remainingCars);

// Declaring only two variables while Destructuring
// only two variables.
// let carMiles = [1, 2, 3, 4, 5, 6];
// let car1, remainingCars;
// [car1, ...remainingCars] = carMiles;
// console.log(car1, remainingCars);

// Destructuring and leaving one variable out
let carMiles = [1, 2, 3, 4, 5, 6];
let car1, car2, remainingCars;
[, car2, ...remainingCars] = carMiles;
console.log(car2, remainingCars);