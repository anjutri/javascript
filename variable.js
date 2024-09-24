for( let i=0;i<5;i++)
{
    console.log(i);//execute within the scope
    
}
//console.log(i);// 5 on var ,, on let undefined

//var keyword breaks  the scope rule
//let obeys the scope rule
//var data=188;
//var data=234;

//var allows duplicate variables
///let wont allow duplicate variables

var data =100;  //this is global variable
//bl
{
    var data = 200; //local variable wont use after line 20 with in block only
    
}
console.log(data); //coz of var == 200 so use let for 100
// if any block of code is effecting global member called as global pollution issue
//global polluting issue raised by var keyword
//we can overcome it by using let


//console.log(da); //da not defined
//let da =23;
//variable hoisting == getting undefined before decl;arationa nd initialization
//this is raised because of var keyword
//we can overcome with let keyword

/*---------var---------------------let-----------
ES1                                 ES6
breaksscope rule                     follows
allows duplicate member              wont allow
 raise global polluting              overcomes this
 raise variable hoisting             overcomes this
 */

 // const keyword
 const dt=122; //cant modify
 //dt =32;//type error

 const arr=[1,2,3,4,5];
arr[0]=23;
arr[3]=43;
arr[5]=76;
console.log(arr);

arr.pop(); //dlt last item from array

console.log(arr);
arr.shift(); //removes first item from array
console.log(arr);



const obj = {
    "sub_one":"angular12",  // key    and   value
    "sub_two":"angular172"  // key   and    value
};
obj.sub_one ="ajkhdj"; // can modify keys but not obj as it is constant
obj.sub_two  = "yjb";
console.log(obj);


//SYMBOL
//used to provide security and wont access it directly
var dat= Symbol(100);
console.log(dat);

