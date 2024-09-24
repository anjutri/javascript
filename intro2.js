//variables are used to store the data
//string data ,number data,boolean.object.....
//we can declare the variable using var,let or const
//let and const keywords were introduced in ES6 version
//variables should contain a-z,A-Z.0-9,$ and _
//variable should not start with digits
/*
syntax:
var/let/const  variablename = value;

*/
var var1 = "hello";
console.log(var1);//no #

//numbers 
//decimal,float/double,hexadecimal(prefix :ox),octal(0o),binary(0b)
var decimalnum=100;
var doublenum=100.12;
var hexanum= 0x123ABC;
var octa = 0o127;
var binarynum = 0b1010;

console.log( decimalnum, doublenum,hexanum,octa,binarynum);
//boolean true ---1 false---0
var flag = true;
console.log(flag);
console.log(true+true);
console.log(true+1);
console.log(true+false);
var x = "hello";
x === "hello" ? console.log("hy" ): console.log("by");

//string -- colection of character called as string
//"" ,'',``(backtick)
//'' (backtick) operator introduced in ES6
//`` -- called as template leitrals 
//`` --used to define the"paragraphs"

var sub= "javascript";
var wish =`wlcm to ${sub}`;//$for refering one variable to other
console.log(wish);

var tb = "emp";
var sal = 28787;
var sql = `select * from ${tb} where esal>${sal}`;
console.log(sql);

var uname = "admin";
var sql2 = `select * from ${tb} where uname =${uname} `;
console.log(sql2);

// DATATYPE === sring,number,boolean,undefined,null,bigint,symbol 

//undefined ---- object is there but not working   eg. emp is there but no work so undefined 
//but if object is only not there then--- null
 var x;
 console.log(x);//undefined coz obj is there but no work is assigned
 x1 = null;
 console.log(x1);

// == job
// === job $ work
console.log (undefined == undefined); //true no work for both
console.log(undefined === undefined);// true  no work for both, both part of tcs
console.log(null == null);// true not part of tcs not part of tcs
console.log(null === null);// true 1.not part of tcs 2.not part of tcs   1.no work 2.no work so true
console.log(undefined == null);//true  no work no work 
console.log(undefined === null);//false (-----------)part of tcs yes  part of tcs no ,,no work no work 


//bigint ---- to store large number
//sufix with "n"
// greater thn 2^57 - 1 
var bigintnum =5444444444467777777777777777777777777777777777777777777777777777
77777777777423333333333333333333333331346347558765423453645365446754213645364563
25436254325463546346236434326443624354631546534523645364
544444444444444444444444444444444423n;
console.log(bigintnum);


console.log(typeof []);
console.log(typeof 3n);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof "gy");
console.log(typeof 132);
console.log(typeof false);



console.log( 1n+2n);

console.log(1n/1n);
