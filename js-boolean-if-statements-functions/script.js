// Boolean, True, and false
console.log(true);
console.log(false);

// Comparison operators
//< > <= >= === == !=

console.log(10 > 5); //yes
console.log(5 === "5"); //false
console.log(5 == "5"); //true
console.log(5 !== 3); //true

5 != "5"; //loosely similar
5 !== "5"; //strictly similar

// Truthy and falsy
console.log(Boolean(0)); //false
console.log(Boolean("")); //false
console.log(Boolean("hello")); //true
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false
