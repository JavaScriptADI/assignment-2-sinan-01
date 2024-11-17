// 1.Declare a variable and assign a string as a value. Make sure the string is at least 6 characters long. Print the variable to the console.
let string = "welcome";
console.log(string);

// 2. What is the difference between "5" and 5?
// answer: "5" is a string (text), and 5 is a number.

// 3. Declare a variable and assign a number as a value. Make sure the number is greater than 9. Print the variable to the console.
let number = 12;
console.log(number);

// 4.Declare a variable and assign a boolean as a value. Print the variable to the console.
let isGreater = 5 > 3;
console.log(isGreater); //Output: true

// 5.What operators give us a boolean result?
//answer: ===, >, <, !==, >=, <=, !.

// 6. Declare a variable with the value of "Hello". Covert the value to upper case and print the converted value to the console.
let string2 = "Hello";
console.log(string2.toUpperCase());

// 7. Declare another variable with the value of "World". Convert the value to lower case and print the converted value to the console.
let string3 = "World";
console.log(string3.toLowerCase());

// 8.Given code:
let text = 'Hello';
text.toUpperCase();
console.log(text);
//answer: Before invoking the method: The variable’s value is 'Hello'.
// After invoking the method: The variable’s value remains "Hello" because strings cannot be changed in JavaScript.

// 9. Given code:
let text2;
console.log(text2); //output: undefined (ცლადს მნიშვნელობა არ აქვს მინიჭებული).

// 10. Find an error in the following code:
let text3 = 'Hello';
console.log(text3.toLowerCase()); //"toLowercase" should be replaced with "toLowerCase".

// 11. Find and fix the error in the following code:
let age = prompt('How old are you?');
let nextAge = Number(age) + 1; //let nextAge = age + 1; >>> let nextAge = Number(age) + 1;
console.log(`Next year you will be ${nextAge}`); //The return value when using prompt() is always a string. If we want to perform numerical operations, we must first convert it to a "Number".

// 12. Finish the code:
let name = prompt('What is your name?');
let age2 = Number(prompt('How old are you?'));
let isInSixties = age2 >= 60 && age2 < 70;// finish the code so that it prints true if the age is in60s
console.log(`${name} is in sixties: ${isInSixties}`);

// 13. What is the value of x ?
let x = 5;
console.log(x++);
console.log(x);
// output: 5  6 (x++ ჯერ დაბეჭდავს 5-ს, შემდეგ გაზრდის ერთით და გახდება 6)


// 14. What is the value of y ?
let y = 5;
console.log(++y);
console.log(y);
// output: 6  6 (++y y-ს გაზრდის ერთით და დაბეჭდავს, შესაბამისად დაიბეჭდება 6  6)

// 15. What is x++ and x-- ?
// answer: "x++"" will first print , then increment by one, "x--"" is first printed and then decremented by one.

//16. What is the difference between ++x and x++?
// answer: "++x" will increment x by one and print it while "x++"" will first print x and then increment it by one. 

// 17. If we try to declare variable without any value, what will be the value of the variable in the console?
// answer: If we do not assign a value to the variable, it will output "undefined" in the console.

// 18. Show the example of equality operator.
let a = 1;
let b = "1";
console.log(a == b); // output: true

// 19. Show the example of not equal operator.
let c = 3;
let d = "3";
console.log(c != d); // output: false

// 20. What's going on when we try to add string and number?
// answer: When we add a number and a string, it is not added mathematically, even if the value of the string is a number, for this we need to convert the string to Number.




