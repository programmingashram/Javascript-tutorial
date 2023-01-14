## What is Function in javascript ?

**in simple language** - function is bunch of js code.in function we can able to fetch output when we call the function, in function we can create a seprate block of js code. in function we can craete one time and we can use multiple times. where we need same code. we can call our function when another function is call.

## How many types of function in javascript ?

>   1.  Local Function

#### Local function is also known as simple function, we can write this simple function like that - 
    
    **For Example :-**

  <code>
        function fnName(){
            console.log("Hello I am function...:)");
        }
        fnName();
    </code>  


>   2.  Arrow Function

#### Arrow function is short hand function, we can check and create arrow function injust single line - 
    
    **For Example :-**
<code>
        x = ()=> console.log("Hello I am arrow function");
        x();
    </code>  


>   3.  Nested Function in javascript.   
#### Nested function allows us to create a function in a function. - 

    **For Example :-**

<code>
       function fn1(){
            console.log("Hello I am function First...:)");

            function fn2(){
                console.log("Hello I am function Second...:)");
            }
            fn2();
        }
        fn1();
</code>  

