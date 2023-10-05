//mistakes and issues in builtin js
console.log(typeof navigator);
// 1. navigator. , though it is a builtin but type of navigator shows undefined.

new Number();
new String();
new Boolean();
/* 2 BigInt();
Math  , Both Bigint and Math are also wrapper object like above, but there's no new in front of them, which makes it weird.*/

console.log(typeof Date);
// 3 Though Date is objet but it is shown as function,


console.log(typeof null);
// 4 Famous Error (Bug), null should be null but is shown as object. 

// These are the current mistakes in javascript.