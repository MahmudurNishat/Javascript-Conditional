let age = 11;
let price = 500;

if (age <= 12) {
  console.log("you can eat free");
} else if (age >= 60) {
  // discount 50% //
  const discount = (price * 50) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else {
  console.log(price);
}

//  * Task 1 : grading system
//  * Task 2 : Bmi Calculator Search Google .
