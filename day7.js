const myname = "abz";
const age = "24";
const favColor = "red";

console.log(
  `My name is ${myname}, I am ${age} years old, my favorite color is ${favColor}.`
);

//
const num = 15;

if (num % 3 === 0 && num % 5 === 0) {
  console.log("fizz buzz");
} else if (num % 3 === 0) {
  console.log("fizz");
} else if (num % 5 === 0) {
  console.log("buzz");
}


//
let favMovies = [
  "green mile",
  "Lord of the Rings",
  "The Godfather",
];

favMovies.push("SAW");
favMovies.push("the inbetweeners");

for (let i = 0; i < favMovies.length; i++) {
  console.log(favMovies[i]);
}

//
for (let i = 9; i >= 0; i--) {
  console.log(i);
}

//
let birthday = new Date("April 18, 1998");
let today = new Date();

let timeDifference = today.getTime() - birthday.getTime();

var daysDifference = Math.round(timeDifference / (1000 * 3600 * 24));
console.log("Days difference between birthday and today: "+ daysDifference);
