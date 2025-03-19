// whenLoaded.js

function whenLoaded()
{
    loadSounds(sounds);

    makeAppButton();

    makeTitleOfApp();

    setTimeout(function()
    {
        randomInputs();
    }, 1000);

    ge('buttonDivCircle').click();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

