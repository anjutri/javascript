/*
Rest parameters in functions
------------------------------

-  used to store more than one value in single argument
- "..." called spread operator,which is used when we want to increase the capability of argument so it stores more than 1 value
- note:: 1) we can take only one spread operator per function
-      2) position of spread operator(Rest parameter) always in occurance(last)
- Default value of spread parameter is [] empty array
- it is introduced in ES6

< script >
       function fun2(...arg1) 
    {
        console.log(arg1);
    };

    fun2("hello"); 
    fun2(); //[] default value of rest parameters
    fun2("hy","wow""12");
    </script>
*/
