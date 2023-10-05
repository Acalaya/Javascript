console.log(Math.max(1,2,3,4));
console.log(Math.abs(-23));
console.log(Math.pow(3,4));
console.log(Math.random());
console.log(Math.floor(12.3333333333));
console.log(Math.floor(Math.random()*4));
console.log(Math.ceil(14.00001));
console.log(Math.PI);


//Date
console.log(Date.now());
//date given on timestamp, go to internet and convert into human date/time
console.log(new Date().getFullYear());
// is used on Copyright $ copy:2023 
console.log(new Date().getMonth());
//jan=0, feb=1, 
console.log(new Date(2023,1,11).getDate());

//dateofbirth calculate
let currentDate = new Date ();
let personDate = new Date(2003,0,11);
let age = currentDate.getFullYear() - personDate.getFullYear();
console.log(age);

//Isostring= jan=1, and date not in timestamp.
console.log(new Date().toISOString().split("T") [0]);


