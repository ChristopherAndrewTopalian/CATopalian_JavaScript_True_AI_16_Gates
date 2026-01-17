// makeTitleOfApp.js

function makeTitleOfApp()
{
    let mainDiv = ce('div');
    mainDiv.style.position = 'absolute';
    mainDiv.style.left = '4px';
    mainDiv.style.top = '2px';
    mainDiv.style.width = '100px';
    mainDiv.style.lineHeight = '15px';
    ba(mainDiv);

    //-//

    let titleOfApp = ce("a");
    titleOfApp.style.fontFamily = 'Arial';
    titleOfApp.style.fontSize = '17px';
    titleOfApp.style.fontWeight = 'bold';
    titleOfApp.style.color = 'rgb(100, 100, 100)';
    titleOfApp.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_True_AI_16_Gates'
    titleOfApp.target = '_blank';
    titleOfApp.textContent = ' CATopalian JavaScript True AI 16 Gates';
    mainDiv.append(titleOfApp);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

