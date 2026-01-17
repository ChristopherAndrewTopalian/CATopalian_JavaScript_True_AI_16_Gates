// whenLoaded.js

function makeTrueAiDiagram()
{
    let theImage = ce('img');
    theImage.src = 'src/media/textures/CATopalian_True_AI_Wheel.png';
    theImage.style.width = '420px';
    theImage.style.position = 'absolute';
    theImage.style.left = '87px';
    theImage.style.top = '-5px';
    ba(theImage);
}

function whenLoaded()
{
    makeTrueAiDiagram();

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
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

