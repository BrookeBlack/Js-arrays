// array-exercises.js

// Exercise 1: Create an array of three colors and print the first color.
var myArray = ["blue","red", "orange"];

// Exercise 2: Add a color to the end of the array and print the array.
myArray.push(["purple"]);

// Exercise 3: Remove the last color from the array and print the array.
myArray.pop();

// Exercise 4: Add a color to the beginning of the array and print the array.

myArray.unshift(["yellow"]);
// Exercise 5: Remove the first color from the array and print the array.
myArray.shift();

// Exercise 6: Print the number of colors in the array.
console.log(myArray);

// Exercise 7: Convert the array into a string separated by dashes.
var myArray = ["blue","red", "orange"];
myArray.join(", ");

// Exercise 8: Replace the second color with "pink" and print the array.
var myArray = ["blue","red", "orange"];
myArray.splice(1, "pink");
console.log(myArray);

// Exercise 9: Create an array of numbers and print the third number.
var ourArray = [1, 2, 3, 4];
console.log([2])

// Exercise 10: Remove the last element, add two numbers to the beginning, and print the array.
var ourArray = [1, 2, 3, 4];
myArray.pop();
myArray.unshift([15, 7]);
console.log(ourArray);
