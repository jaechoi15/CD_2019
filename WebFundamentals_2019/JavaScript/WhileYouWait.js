/* Create a birthday countdown.
For every day, print how many days left.
If it's more than 30 days, print a sad message.
If it's less than 30 days, print a message that sounds excited!
If it's less than 5 days, SCREAM IT!
ONCE IT'S YOUR BIRTHDAY, HAVE A PARTY! */

for (var daysUntilMyBirthday = 60; daysUntilMyBirthday > -1; daysUntilMyBirthday -= 1)
{
    if (daysUntilMyBirthday > 30) {
        message = daysUntilMyBirthday + " days until my birthday. Such a long time... :(";
        console.log(message);

    } else if (daysUntilMyBirthday <= 30 && daysUntilMyBirthday > 4) {
        message = daysUntilMyBirthday + " days until my birthday. Getting closer!";
        console.log(message);

    } else if (daysUntilMyBirthday < 5 && daysUntilMyBirthday > 0) {
        message = daysUntilMyBirthday + " DAY(S) UNTIL MY BIRTHDAY!!!";
        console.log(message);

    } else {
        message = "HAPPY BIRTHDAY TO ME!!!";
        console.log(message);
    }
}