let yourScore = 81;
let friendScore = 75;

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

if (yourScore > 80) {
  console.log("inside your friend");
  if (friendScore > 80) {
    console.log("launch");
  } else if (friendScore >= 60) {
    console.log("better luck");
  } else if (friendScore >= 40) {
    console.log("message unseen");
  } else {
    console.log("block");
  }
}
// main else
else {
  console.log("act sad");
}
