const age = 40;
let ticketPrice;

if (age < 12) {
  ticketPrice = 0;
  console.log(ticketPrice);
} else if (age < 25) {
  /***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

  ticketPrice = (800 * 25) / 100;
  console.log(ticketPrice);
} else if (age >= 60) {
  ticketPrice = 800 * (15 / 100);
  console.log(ticketPrice);
} else {
  ticketPrice = 800;
  console.log(ticketPrice);
}
