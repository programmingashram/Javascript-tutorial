// DOM Document Object Model
// in this DOM we can access, create, add, remove, Replace our HTML Element from Javascript

// How can we access HTML Element In JS ??
// _______________________________________________________
// We can access HTML elements by mulitple ways for example

    // 1. documen.gteElementById(),

        let x; // Declear a var
        x = document.getElementById('idName'); //assign value in div var.

        // call variable in console
        // console.log(x);

    // 2. document.getElementsByClassName();
        let y; // Declear a var
        y = document.getElementsByClassName('para'); //assign value in div var.

        // in case i want second class elements it will 
       y[1].style.color = "red";

        // call variable in console
        // console.log(y);

    // 3. document.getElementsByTagName();

        let z; // Declear a var
        z = document.getElementsByTagName('p'); //assign value in div var.

        // in case i want second class elements it will 
        // z[3].style.color = "green";

        // call variable in console
        // console.log(z);
        
    // 4. document.querySelector();

        let a; // Declear a var
        a = document.querySelector('#idName'); //assign value in  var.

        // QuerySelector is giving me firts indxing element

        // call variable in console
        console.log(a);

    // 5. document.querySelectorAll();
        let b; // Declear a var
        b = document.querySelectorAll('.para')[2]; //assign value in  var.
        // QuerySelector is giving me firts indxing element
        b.style.fontSize = "2rem";
        // call variable in console
        console.log(b);



// How can we add or create  HTML Element from JS ??
// _______________________________________________________

//  We can add or create html element from javascript by using DOM

    // -----[Create Element]---------

    // 1. document.createElement()

    // For Example - :
        // let me access one parent element from html.
        let body = document.getElementById('body'); 

        //  lets create one element
        // We are creating header tag
        let header = document.createElement('header');
       

        // just append the newly created header tag in body

        // Lets append Header in to body by variables
        body.appendChild(header);

    // -----[Add Element]---------
    // 2. I have already craete an header variable, i'm just going to re use for addign element and text in under header tag

        // For Example - :
            //  Creating heading tag 
            let headingTag = document.createElement('h1');

            // add value in my headung
            headingTag.innerHTML = "Hii I am Heading!!";

            // Append  headign in header tag
            header.appendChild(headingTag);
           


// How can we remove html elements from javascript ??
// _______________________________________________________

    // We can remove html Elements by using DOM method - 
    //  We are removing or deleting html element by this method

    // header.removeChild(headingTag);


// How can we replace html elements from javascript ??
// _______________________________________________________

    // We can rplace html Elements by using DOM method - 
    // i am using DOM method - 
    
    let hfour = document.getElementsByTagName('h4')[0];
    //  We can replace our existing h4 tag to newly created h1 tag.
    body.replaceChild(headingTag, hfour);



        
    

