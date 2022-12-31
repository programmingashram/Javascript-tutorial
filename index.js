// What is Function in javascript ?

//    in simple language - function is bunch of js code. 
//    in function we can able to fetch output when we call the function
//    in function we can create a seprate block of js code.
//    in function we can craete one time and we can use multiple times. where we need same code.
//    we can call our function when another function is call.


// How can we create function in js ?

    // We can create function by use of function keyword, and defiend the name of our function , just like
    // for Example - :

    function test(){}

    // 1. function is keyword 
    // 2. test() is my function name

//  Where we use function ?
    // If we have a dif dif functinalities like
        // 1. substraction functionalty
        // 2. Multiplication functionalty
    // in case our function will help you to create two or multiple bunch of code. 

    // For Example : -
        // 1. functionality (Substraction)
                    
        // Lets Create the function 
            function sub(){
                // Now creating the local var
                let x = 70;
                let y = 10; 
                // Now we are adding substraction (Arthemetic Operater)
                const z = x - y;

                // Now we are checking output for our substarction function
                console.log(z);

                // But it's not showingany output in console
            }

            // for output you need to call the function
            // just focus on function name which is - sub()
            //  Call the function 
            sub();

            // Now you can able to view output in your console :).



            // 2. functionality (Multiplication)

            // Lets Create the function 
            function multy(){
                // Now creating the local ar
                let x = 70;
                let y = 10; 
                // Now we are adding substraction (Arthemetic Operater)
                const z = x * y;

                // Now we are checking output for our substarction function
                console.log(z);

                // But it's not showingany output in console
            }

            // for output you need to call the function
            // just focus on function name which is - multy()
            //  Call the function 
            multy();

            // Now you can able to view output in your 
            
//  ________________________________________________________________________________

//  What is function with arguments ?
    // function with arguments is just the game of passing the passes. let me give an example for that
    // for example - :
            
    //step 1. creating a function 

        // function arguFn(){
            
                //[i comment this line for your batter understaanding what is going here...:)],
        // }


    //step 2. Adding an arguments in function

        // function arguFn(arg1, arg2){

                //[i comment this line for your batter understaanding what is going here...:)],
        // }
    
    
    //step 3. Lets pass the values from calling function scope

        // function arguFn(arg1, arg2){

                //[i comment this line for your batter understaanding what is going here...:)],
        // }
        
        // arguFn(10, 20) i am passign two values in (10, 20)


    //step 4 Lets see the output 
        function arguFn(arg1, arg2){
            // currently i am using console for output

            console.log(arg1 + arg2);

            //  Its showing outputs 30.
        }
        arguFn(10, 20)

    // That is an Function with arguments part is done.

// ________________________________________________________________________________
    

//  What is arrow function in js ?

//    Arrow function provide us short hand way to create a function. that is a part of javascript ES6,


    //   For Example - :

        // Let's Create a arrow function 

        // Step 1. Creating variable for arrow function.
                    
                let x;
       
        // Step 2. Now just creating an arrow function
                    // We can create arrow function by using "=>()", (Beautiful arrow [=>] function [()]);
                
                // For Example
                x = ()=>{
                    // here you can write your console or return.
                }

                // 1. x is function name,
                // 2. ()=> arrow function formate 

        // Step 3. Then thats the time for call my arrow function.
                // it's just similer like local function

                x = ()=> {console.log("Hello I am arrow function...:)");}
                x();
                // am calling the function here
                
                // In that case if you have only one statemet/Value for output
                // so you can able to remove curly breces ({}) after arrow (=>),

                    // Just like that
                    y = ()=> console.log("Single line statement...:)");
                    y();
                    // Here i have removed my curly breces and its giving me expected result.
             
                


               

                

                    
                    
                    



        