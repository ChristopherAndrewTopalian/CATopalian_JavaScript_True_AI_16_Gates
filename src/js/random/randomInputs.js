// randomInputs.js

let timer001;

function randomInputs()
{
    timer001 = setInterval(function()
    {
        ge('inputA').innerHTML = Math.round(Math.random());

        ge('inputB').innerHTML = Math.round(Math.random());
    }, 100);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

