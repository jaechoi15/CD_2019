/* Create a function that can take a start point, end point, and skip amount, to print all numbers in the range. */

function printRange(start, end, skip) 
{
    
}for (i = start; i < end; i += skip) {
        console.log(i);
    }

printRange(1,20,2);


function printRangeBonus(start, end, skip)
{
    if (!end) {
        end = start;
        start = 0;
    }

    if (!skip) {
        skip = 1;
    }

    for (i = start; i < end; i += skip) {
        console.log(i);
    }
}

printRangeBonus(1,20);
printRangeBonus(2);