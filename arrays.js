let player1 ="Sam";
let player2 ="Max";

let player = {
    player1 : "Tony",
    player2 : "Sony",
};

//this way, it's hard to store data of each and every ones, where arrays comes in practice.
let players = ["Monika", "Sonika"];
console.log(players[0]);
players[2] = "Rony";
console.log(players);

//array is object in js
console.log(typeof players);

// another way to create array , wrapper object That's why js is multiparadigm language. and as js is dynamically typed language, so we can give any type of values in array.
let plants = new Array("Aloevera", "Snake", "Monstera");
console.log(typeof plants);
plants[3] = "Lavender";
console.log(plants);
delete plants[3];
console.log(plants);

//inbuilt arrays functions:
//push - add value in the end
plants.push("Bamboo", "Peace Lily");
console.log(plants);
//pop - delete last value
plants.pop();
console.log(plants);
//unshift- add new in beginning
plants.unshift("Peace Lily");
console.log(plants);
//shift- remove first value
plants.shift();
console.log(plants);
//join - join array elements
console.log(plants.join(" "));
console.log(plants.join(" , "));
console.log(plants);
//concat- merge array
let games = ["football", "cricket"];
let newData = plants.concat(games);
console.log(newData);
//reverse - reverse array
console.log(plants.reverse());
//slice - returns portion of array, when typical portion or section needed
console.log(plants.slice(2)); //sliced value after 2
console.log(plants.slice(2,4)); //sliced valur from 2 to 4
//fill - set or fill array with new one
console.log(plants.fill("hey"));
console.log(plants.fill("baby",2,4)); 


