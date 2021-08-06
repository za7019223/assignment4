// camparison operator

console.log("QUESTION NO=1");

var num1 = true
var num2 = false
flag = false || (true && false);
console.log("false || (true && false)",flag);
 
var num3 = true
var num4 = 1+2
flag = true || (1+2);
console.log("true || (1+2);", flag);

var num5 = 1+2
var num6 = true
flag = (1+2) || true;
console.log("(1+2) || true;", flag);

var num7 = true
var num8 = 1+2
flag = true && (1+2);
console.log("true && (1+2);", flag);

var num9 = false
var num10 = 1+2
flag = true && (1+2);
console.log("false || (1+2);", flag);

var num11 = 1+2
var num12 = true
flag = (1+2) && true;
console.log("(1+2) && true;", flag);

var num13 = (32*4)
var num14 = 129
flag = (32*4) >= 129;
console.log("(32*4) >= 129;",flag);

var num15 = false
var num16 = true
flag = false !== !true;
console.log("false !== !true;", flag);

var num17 = true
var num18 = 4
flag = true === 4;
console.log("true === 4;" , flag);

var num19 = false
var num20 = 847
var num21 = '847'
flag = false === (847 === '847');
console.log("false === (847 === '847');",flag);

var num19 = false
var num20 = 847
var num21 = '847'
flag = false === (847 == '847');
console.log("false === (847 == '847');",flag);

(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;

var22 = true
var23 =(100/5)
var24 = 20
var25 = (328/4)
var26 = 82
var27 = false
flag = (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
console.log("(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;",flag);


// console.log("QUESTION NO=2");

// var b = +prompt("Enter a number");
// if (Number.isInteger(b) == true) {
//     console.log(b+ "Number is an integer");
    
// }
// else{
//     console.log("Not an integer number");
// }







console.log("QUESTION NO=3");
// Write a js program to find maximum between two numbers.

var num1 = 5
var num2 = 10
if (num1 <= num2) {
    console.log(" num10 is greater then num5");
}

console.log("QUESTION NO=4");

// Write a js program to find maximum between three numbers.

var num1 = 5
var num2 = 10
var num3 = 15
if (num1 <= num2 <= num3) {
    console.log(" num15 maximum number ,from num5 and num10");
}

console.log("QUESTION NO=5");

// Write a js program to check whether a number is negative, positive or zero

var number = 6
if(number>0) {
    console.log("6 number is postive");
    
}
 else if (number==0){ 
     console.log('number is zero');
    
}
else{
    console.log("number is negative");
}


console.log("QUESTION NO=6");

// Write a js program to check whether a number is divisible by 5 and 11 or not.

var num = 3
if (num % 5 == 0  && num % 11 == 0 ) {
    console.log(" number is devisible");
    
}
else{
    console.log("3 number is devisible by 5 and 11");
}

console.log("QUESTION NO=7");
// Write a js program to check whether a number is even or odd.

var num = 5
if (num % 2 == 0) {
    console.log("numer is even");
}
else{
    console.log(" 5 number is odd");
}