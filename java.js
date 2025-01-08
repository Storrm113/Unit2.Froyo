//** Steps
// create repo named Unit2.froyo and clone
// add Team
// find plan for code
// promt user for flavors on entering site
// users imput split into array of strings
// loop is used iterate throgh flavors
// object is used to keep count of how may orders there are of each flavor
// program counts nomber of flavors in users input
// logic for counting the frequencies of elements in an array is org into a fun that returns
// names are consisten and meaningfull
// console refletcts changes */

// Step 1: Prompt the user to enter a list of comma-separated froyo flavors
const userInput = prompt("Enter a list of froyo flavors (comma-separated):");

// Step 2: Split the input into an array of flavors
const flavorsArray = userInput.split(',');

// Step 3: Create an object to count the occurrences of each flavor
const flavorCount = {};

// Loop through the array and count each flavor
flavorsArray.forEach(flavor => {
  flavor = flavor.trim();  // Remove any extra spaces if present
  if (flavorCount[flavor]) {
    flavorCount[flavor] += 1;
  } else {
    flavorCount[flavor] = 1;
  }
});

// Step 4: Display the results in a table in the console
console.table(flavorCount);
