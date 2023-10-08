let brands = ["nike", "adidas", "chanel"];
/*let brand1 = brands[1];
console.log(brand1); */

//destructuring assignments - modify or distructure data and assign to another key
let [brand1, brand2="kukur", brand3, brand4="jordan"] = brands; // in case of no data, we can create here but, if the data is already there, we can't replace.
console.log(brand1, brand4);

//spread operators (...) 
let tops = ["cami", "crop", "long-sleeve"];
let [top1, ...others] = tops;
console.log(top1);
console.log(others);
let othertops = ["short-sleeve", "up-shoulder"];
let alltops = [...tops,...othertops, "black"];
console.log(alltops); //spread operator can even merge different values of arrays and put into another one. (like concat does), and we can add new 


