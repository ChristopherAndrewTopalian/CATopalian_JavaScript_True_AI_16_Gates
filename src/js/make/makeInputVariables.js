// makeInputVariables.js

function makeInputVariables()
{   
    if (ge('inputContainer'))
    {
        ge('inputContainer').remove();
    }

    let inputContainer = ce('div');
    inputContainer.id = 'inputContainer';
    inputContainer.style.display = 'flex';
    inputContainer.style.flexDirection = 'row';
    inputContainer.style.gap = '5px';
    inputContainer.style.position = 'absolute';
    inputContainer.style.left = '30px';
    inputContainer.style.top = '120px';
    inputContainer.style.fontSize = '20px';
    inputContainer.style.fontWeight = 'bold';
    ba(inputContainer);

    let inputA = ce('div');
    inputA.innerHTML = Math.round(Math.random());
    inputA.id = 'inputA';
    //inputA.style.position = 'absolute';
    //inputA.style.left = 280 + 'px';
    //inputA.style.top = 150 + 'px';
    inputA.style.zIndex = 2;
    inputContainer.append(inputA);

    //-//

    let inputB = ce('div');
    inputB.innerHTML = Math.round(Math.random());
    inputB.id = 'inputB';
    //inputB.style.position = 'absolute';
    //inputB.style.left = 320 + 'px';
    //inputB.style.top = 150 + 'px';
    inputB.style.zIndex = 2;
    inputContainer.append(inputB);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

