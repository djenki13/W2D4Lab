// 1.   Write an function that contains an if/else statement for the following requirements:
// - If student gets 80 or higher: console log  You did a good job
// - If students get 70 or above: console log Keep trying
// - If students get 60 or above: console log ehhhh
// - If students get 55 or above: console log Not to good
// // - Any grade lower than 55 is Bad Grade But You'll Get Em Next Time

// function grade(points) {
//     if (points >=80 && points <= 100) { console.log("You did a good job")}
//     else if (points <=80 && points >=70) { console.log("Keep trying")}
//     else if (points <=70 && points >=60) {console.log("Ehhhh")}
//     else if (points <=60 && points >=55) { console.log("Not too good")}
//     else if (points <=55 && points >=0) {console.log("Bad grade but you will get them next time")}
// };

// grade(95)
// grade(72)
// grade(66)
// grade(57)
// grade(42)

// 2.   Write a function that prints out multiples of 10 up to a given input (argument)

// function multiplesOf(input) {
//     for (let i=1; i<=input;i++) {
//         if (i % 10 ===0) {
//             console.log(i)
//         };
//     }
// }

// multiplesOf(50)
// multiplesOf(90)
// multiplesOf(91)

// 3.   Write a function that takes bill amount and item price and says how many quarters they'd get in return

// function quarters(billAmt,itemPrice) {
//     console.log(Math.floor((billAmt - itemPrice) / .25))
// }

// quarters(22,4.50)
// quarters(35,4.16)

// 4.    Write a function that prints out how many bills you would recieve in change after paying a certain amount.  Return in as large denominations as possible. Parameters should be amount paid and amount cost

// function bills(overpaidAmount,totalBill) {
//     console.log(Math.floor(overpaidAmount-totalBill))
// }

// bills(27.65,20)
// bills(45,39)

// 5.   Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// function print() {
// for (let i=0; i<=100; i++) {
//     if (i % 3 === 0) {
//         console.log("fizz")}
//     else if (i % 5 === 0) {
//         console.log("buzz")}
//     else if (i % 3 === 0  == i % 5 === 0) {
//         console.log("fizzBuzz") }
//     else (console.log(i))
//     }
// }
// print()