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

