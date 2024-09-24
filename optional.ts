function funon(arg1?:string , arg2?:string ,arg3?:string ):void{
     console.log(arg1,arg2,arg3);
}
funon();//passing argument is optional//undefined undefined undefined
funon("hyyy");//hyyy undefined undefined
funon(undefined,undefined,"hello");//undefined undefined hello






function funto(arg2:string,arg1?:string):void{
    console.log(arg2,arg1);

}
funto("hello","hyy");