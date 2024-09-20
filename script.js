/*
 * Prompt 1:
 *
 * Declare a variable called myFavoriteSong on one line and console.log the value
 * Then, using your Literals, console.log "my favorite song is..." with the song's value
 */

/*
 * Prompt 2:
 *
 * Create 3 variables using let and const, then console.log each of them, using a string literal (` ${} `} in the log
 */

/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each, using console.log:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */

/*
 * 
Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 * Run a console.log that says 'hello my name is..." with your fullName. 
 */


/* Arrays */

// Create an array of Movies, then log the 2nd movie in your array
// Use your array methods to add a movie in to the Front of the array, then the Back of the Array, then to the 2nd index point of the array


/*
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

let array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
let array2 = [
  ['Marty Feldman', 'Marty Marion'],
  ['Marty Stuart', 'Marty McFly'],
  ['Marty Jannetty', 'Marty Robbins']
];
let array3 = [
  ['Marty Feldman', ['Marty Marion']],
  ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
];

/*
 *
 * Use the length of the array below to retrieve the second to last item.
 */
let secondToLastItemArray1 = array1[array1.length - 2];
console.log(secondToLastItemArray1);  


let secondToLastItemArray2 = array2[array2.length - 2][1];
console.log(secondToLastItemArray2);  


let secondToLastItemArray3 = array3[array3.length - 1][1][1][0];
console.log(secondToLastItemArray3); 

let array4 = ['a', 'b', 'c', 'd', 'e'];

/*
 *
 * Use the following arrays to answer the subprompts below.
 */

let thom = ['Thom', 1000, 'Christchurch'];
let karolin = ['Karolin', 16, 'New York'];
let kristyn = ['Kristyn', 5, 'Pittsburgh'];
let cathleen = ['Cathleen', 186, 'New York'];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Tom".

// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.

// Change Cathleen's hometown from New York to "Gotham City".

// Remove "Pittsburgh" from Kristyn's array and add "Oakland".


let myFavoriteSong = "sanguine paradice"
console.log(myFavoriteSong);
console.log(`My favorite song is ${myFavoriteSong}`);

const firstName = "Moses";  
let age = 25;  
let favoriteColor = "green";

console.log(`My name is ${firstName}`);
console.log(`I am ${age} years old`);
console.log(`My favorite color is ${favoriteColor}`);

let myNumber = 5;  

console.log(myNumber + 5);  
console.log(myNumber - 3);  
console.log(myNumber * 3);  
console.log(myNumber / 7);  
console.log(myNumber % 2);

let movies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight"];

console.log(movies[1]);  

movies.unshift("The Shawshank Redemption");

movies.push("Pulp Fiction");

movies.splice(2, 0, "Fight Club");

console.log(movies);

console.log(array1[2]);  


console.log(array2[1][1]);  

console.log(array3[1][1][1][0]);

let array = ['item1', 'item2', 'item3', 'item4', 'item5'];

// Retrieve the second-to-last item
let secondToLastItem = array[array.length - 2]; 

console.log(secondToLastItem);  // This will log "item4"

thom[0] = 'Tom';
console.log(thom);

karolin[1] = karolin[1] + 1;
console.log(karolin);

cathleen[2] = 'Gotham City';
console.log(cathleen);

kristyn[2] = 'Oakland';
console.log(kristyn);