// Create a program that will tell you the time.

// var HOUR = 8;
// var MINUTE = 50;
// var PERIOD = "AM";
//...your program should print "It's almost 9 in the morning"

var HOUR = 12;
var MINUTE = 3;
var PERIOD = "PM";
//...your program should print "It's just after 7 in the evening"

var str = "It's ";

// Challenge #1 - Comment out if running challenge #2
// if (MINUTE > 30) {
//     str += "almost " + (HOUR + 1)
// } else {
//     str += "just after " + HOUR
// }

// if (PERIOD == "PM") {
//     str += " in the evening."
// } else {
//     str += " in the morning."
// }


// Challenge #2 - Comment out if running challenge #1
if (MINUTE == 5) {
    str += MINUTE + " after " + HOUR
} else if (MINUTE == 15) {
    str += "quarter after " + HOUR
} else if (MINUTE == 30) {
    str += "half past " + HOUR
} else if (MINUTE > 30) {
    str += "almost " + (HOUR + 1);
} else {
    str += "just after " + HOUR;
}

if (PERIOD == "PM") {
    str += " in the evening."
} else {
    str += " in the morning."
}

console.log(str);