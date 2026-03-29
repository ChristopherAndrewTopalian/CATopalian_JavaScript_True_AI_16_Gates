// gateContradiction.js

// GATE: CONTRADICTION (The Absolute False)
// Contradiction ignores all input. It is the absolute void.
// Truth Table: 0+0=0, 0+1=0, 1+0=0, 1+1=0
function gateContradiction(a, b)
{
    return 0; 
}

//----//

function gateContradiction2(a, b)
{
    if ((a == 0 && b == 0) ||
        (a == 0 && b == 1) ||
        (a == 1 && b == 0) ||
        (a == 1 && b == 1))
    {
        return 0;
    }
    else
    {
        return 0;
    }
}

//----//

/*
CONTRADICTION
0000

A B
0  0  =  0
0  1  =  0
1  0  =  0
1  1  =  0

Opposite: TAUTOLOGY
*/

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

