let book = {
    name : "Harry Potter",
    author : "J.K Rowling",
    love : " I love you.",
    description : function(){
        return "Book";
    },
    //another way of creating function
    others() {
        return "Janu" + this.love ;
    },
    //nested object city
    location : {
        city : {
        Nepal : "Kathmandu",
        Japan : "Tokyo",
        Australia : "Melbourne",
        },
    },
};
//global object (Object)
console.log(Object.keys(book));
//global value in array form (entries)
console.log(Object.entries(book));
//assign can be used to copy
let a = {};
let c = Object.assign(a, book);
console.log(a);
console.log(c);
//book property is copied to b and also to c as assign returns the value as well
  

console.log(book);

console.log(book.location.city);
console.log(book.others());

console.log(book["name"]);
console.log(book.author);
console.log(book.description ());
// Can be used any WebAssembly, either square bracket or .


/*
let b = new Object({
    name : "Harry Potter",
    author : "J.K Rowling",
    description : function(){
        return "Book"
    },
})
Object made with new Object have more features than the before one.
*/

//modify
console.log(book.name);
book.name = "Hey";
console.log(book.name);
book.author = "Acalaya";
console.log(book.author);
//add new property
book.address = "Bharatpur";
book.others = function() {
    return "Baby";
};
console.log(book);

//delete property
delete book.others;
console.log(book);

//const
"use strict";
const apple = Object.freeze({
    price : 180,
    quantity : 2 ,

});
console.log(Object.isFrozen(apple)); //checking freeze 
/*
function deepFreeze(object) {
    // Retrieve the property names defined on object
    const propNames = Reflect.ownKeys(object);
  
    // Freeze properties before freezing self
    for (const name of propNames) {
      const value = object[name];
  
      if ((value && typeof value === "object") || typeof value === "function") {
        deepFreeze(value);
      }
    }
  
    return Object.freeze(object);
  }; 
  deepFreeze(apple);
  */
  apple.price = 150; 
  //deepfreeze
console.log(apple.price);
apple.price = 150; 
console.log(apple.price); 
//apple.type = mustang;
// in here, when we use const, we can change the value of key but cannot add or modify key 

//But we can use freeze to make both key and value constant.
