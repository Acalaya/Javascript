//for loop
for (let i = 0; i<=2; i++) {
    console.log("Darling");
};

//while loop
let j = 0;
while (j < 3) {
    console.log("M");
    j++;
};
//loops not just for printing but function(), logic.., data...
 
//do while loop
let k = 0;
do {
    console.log("O");
    k++;
} while (k < 3);
 // while checks the condition first whether do while does the work and then check the condition 

 //arrays in loops
const plants = ["Aloevera", "Snake"];
for(let a = 0; a<plants.length; a++) {
    console.log(plants[a]);
}

//for loops variance in javascript
//for each loop (only for array, forEach is array function)
plants.forEach(function(v,i) {
    console.log(v);
}); 

//for in loop - get index in array and key in object
const insects = ["cockroach" , "ladybugs", ]
for (let index in insects) {
    console.log(index);
    console.log(insects[index]);
}; 
// good thing about it, we can use it in object as well
const games = {
    game1 : "PUBG",
    game2 : "valorant",
    game3 : {
        name : "Class Royal",
    },
};
for (let g in games ) {
    console.log(g);
    console.log(games[g]);
};
// for nested object, to use loops to get value of nested 
for (const key in games) {
    console.log(key);
    let value = games[key];

    if (typeof value === "object") {
        for (const k in value) {
            console.log(value[k]);
        }
    } else console.log(value);
}
// we can use Object.keys(games) as well.

//for of loop - mostly used for arrays and strings
const players = ["Ronaldo", "Marcelo"]; //araay
for(let playerlist of players) {
    console.log(playerlist);
}; // for of loop gives the values of array
let channel = "Discord"; //string
for (let c of channel) {
    console.log(c);
};







for (let i = 1; i<=1000; i++) {
    console.log(`${i}. I love you for thousand years monsoon <3 \n`);
};








