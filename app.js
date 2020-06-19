// CHAPTERS 21 - 25
// TASK 01
// var firstName = prompt("Enter first name:");
// var lastName = prompt("Enter last name");
// var fullName = "Full name is " + firstName + " " + lastName;
// alert(fullName);


// TASK 02
// var phoneModel = prompt("Enter your favourite mobile phone model");
// var length = phoneModel.length;
// document.write("My favourite phone is : " + phoneModel + "<br>");
// document.write("Length of String : " + length);


// TASK 03
// var string = "Pakistani";
// var index = string.indexOf('n');
// document.write("Index of 'n' is " + index);


// TASK 04
// var string = "Hello World";
// var index = string.lastIndexOf('l');
// document.write("String: " + string);
// document.write("<br>Last index of 'l': " + index);


// TASK 05
// var string = "Pakistani";
// var char = string.charAt(3);
// document.write("String: " + string);
// document.write("<br>Character at 3rd index: " + char);


// TASK 06
// var firstName = prompt("Enter first name:");
// var lastName = prompt("Enter last name");
// var fullName = ''.concat(firstName , ' ' , lastName); //THIS IS CORRECT
// var fullName = firstName.concat(' ' , lastName); // THIS IS ALSO CORRECT
// document.write(fullName);


// TASK 07
// var cityName = "Hyderabad";
// document.write("City name : " + cityName + "<br>");
// cityName = cityName.replace("Hyder", "Islam");
// document.write("After replacement : " + cityName);


// TASK 08
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Before replacements :<br>" + message + "<br><br>")
// message = message.replace(/and/g,'&');
// document.write("After replacements :<br>" + message);


// TASK 09
// var string = "472";
// document.write("Value: " + string + "<br>Type: String<br><br>");
// string = parseInt(string);
// document.write("Value: " + string + "<br>Type: Number<br>");


// TASK 10
// var input = prompt("Enter some text");
// document.write("User input : " + input);
// input = input.toUpperCase();
// document.write("<br>Upper case : " + input);


// TASK 11
// var input = prompt("Enter some text");
// var firstChar = input.slice(0, 1);
// var otherChars = input.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChars = otherChars.toLowerCase();
// var titleCase = firstChar + otherChars;
// document.write("User input : " + input);
// document.write("<br>Title case : " + titleCase);


// TASK 12
// var num = 35.36;
// document.write("Number : " + num);
// var a = num.toString();
// var index = a.indexOf('.');
// document.write("<br>Result : " + a.slice(0, index) + a.slice(index + 1));


// TASK 13
// var userName = prompt("Enter your name ");
// for (var i = 0; i < userName.length; i++) {
//     if (userName.charCodeAt(i) == 33 || userName.charCodeAt(i) == 44 || userName.charCodeAt(i) == 46 || userName.charCodeAt(i) == 64){
//         alert("Please enter a valid username");
//         userName = prompt("Enter your name");
//         i = -1;
//     }
// }


// TASK 14
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var searchInput = prompt("What item do you want?");
// searchInput = searchInput.toLowerCase();
// for (var i = 0; i < items.length; i++) {
//     if (searchInput === items[i]) {
//         document.write(searchInput + " is available at " + i + " index in our bakery.");
//         break;
//     }
// }
// if (i == items.length) {
//     document.write("We are sorry. " + searchInput + " is not available in our bakery");
// }


// TASK 15
// var password = prompt("Enter your password");
// var x = 0, y = 0, z = 0;

// function notANumber() {
//     while (!isNaN(password[0])) {
//         alert("Password must not start with a number.\nPlease enter a valid password.");
//         password = prompt("Enter your password");
//     }
// }

// function sixCharLong(){
//     while(password.length < 6){
//         alert("Password must be atleast 6 characters long.\nPlease enter a valid password.");
//         password = prompt("Enter your password");
//     }
// }

// while (z == 0) {

//     sixCharLong();
//     notANumber();

//     for (var i = 0; i < password.length; i++) {
//         if (password.charCodeAt(i) > 47 && password.charCodeAt(i) < 58) {
//             x = 1;
//         }
//         else if (password.charCodeAt(i) > 64 && password.charCodeAt(i) < 123) {
//             y = 1;
//         }
//     }

//     for (var i = 0; i < password.length; i++) {
//         if (((password.charCodeAt(i) < 48 || password.charCodeAt(i) > 57)
//             && (password.charCodeAt(i) < 65 || password.charCodeAt(i) > 122))
//             || (password.charCodeAt(i) >= 91 && password.charCodeAt(i) <= 96)) {
//             alert("Password cannot contain special characters.\nPlease enter a valid password.");
//             z = 1;
//         }
//         if (z == 1) {
//             password = prompt("Enter your password");
//             sixCharLong();
//             notANumber();
//             i = -1;
//             z = 0;
//             x = 0;
//             y = 0;
//         }
//     }

//     if (x == 1 && y == 1) {
//         alert("Your password is valid.");
//         break;
//     }
//     else if (x == 1) {
//         alert("Password must also contain letters.\nPlease enter a valid password.");
//         x = 0;
//         password = prompt("Enter your password");
//         sixCharLong();
//         notANumber();
//     }
//     else if (y == 1) {
//         alert("Password must also contain numbers.\nPlease enter a valid password.");
//         y = 0;
//         password = prompt("Enter your password");
//         sixCharLong();
//         notANumber();
//     }

// }


// TASK 16
// var university = "University of Karachi";
// var array = university.split("");
// for (var i = 0; i < array.length; i++) {
//     document.write(array[i] + "<br>")
// }


// TASK 17
// var userInput = prompt("Enter any string");
// var lastIndex = userInput.charAt((userInput.length)-1);
// document.write("User Input : " + userInput + "<br>Last character of input : " + lastIndex);


// TASK 18
// var text = "The quick brown fox jumps over the lazy dog";
// document.write("Text: " + text + "<br>");
// text = text.toLowerCase();
// var count = 0;
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 3) === "the") {
//         count++;
//     }
// }
// document.write("There are " + count + " occurrence(s) of word 'the'");










// CHAPTER 26 - 30

// TASK 01
// var userInput = prompt("Enter a positive integer");
// document.write("Number : " + userInput + "<br>");
// document.write("Round off value : " + Math.round(userInput) + "<br>");
// document.write("Floor value : " + Math.floor(userInput) + "<br>");
// document.write("Ceil value : " + Math.ceil(userInput));


// TASK 02
// var userInput = prompt("Enter a negative integer");
// document.write("Number : " + userInput + "<br>");
// document.write("Round off value : " + Math.round(userInput) + "<br>");
// document.write("Floor value : " + Math.floor(userInput) + "<br>");
// document.write("Ceil value : " + Math.ceil(userInput));


// TASK 03
// var number = prompt("Enter any number");
// document.write("The absolute value of " + number + " is " + Math.abs(number));


// TASK 04
// var randomNumber = Math.random();
// var improvedNum = (randomNumber * 6) + 1;
// var diceNumber = Math.floor(improvedNum);
// document.write("random dice value : " + diceNumber);


// TASK 05
// var randomNumber = Math.random();
// var improvedNum = (randomNumber * 2) + 1;
// var coinToss = Math.floor(improvedNum);
// if(coinToss == 2){
//     document.write(coinToss + "<br>Random coin value : Heads");
// }
// if(coinToss == 1){
//     document.write(coinToss + "<br>Random coin value : Tails");
// }


// TASK 06
// var randomNumber = Math.random();
// var improvedNum = (randomNumber * 100) + 1;
// var reqNumber = Math.floor(improvedNum);
// document.write("random value between 1 and 100 : " + reqNumber);


// TASK 07
// var weight = prompt("Enter your weight in kilograms");
// weight = parseFloat(weight);
// document.write("The weight of user is " + weight + " kilograms");


// TASK 08
// var randomNumber = Math.random();
// var improvedNum = (randomNumber * 10) + 1;
// var secretNumber = Math.floor(improvedNum);
// var userInput = prompt("Enter a number between 1 and 10");
// while(userInput != secretNumber){
//     alert("Oops! your number didn't match the secret number.\n\nTry again");
//     userInput = prompt("Enter a number between 1 and 10");
// }
// alert("Congratulation your number matched the secret number");










// CHAPTER 31 - 34

// TASK 01
// var date = new Date();
// document.write(date);


// TASK 02
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var month = new Date();
// var currentMonth = month.getMonth();
// document.write("Current month : " + monthNames[currentMonth]);


// TASK 03
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var day = new Date();
// var currentDay = day.getDay();
// document.write("Today is " + dayNames[currentDay]);


// TASK 04
// var day = new Date();
// var currentDay = day.getDay();
// if(currentDay == 0 || currentDay == 6){
//     document.write("It's fun day");
// }


// TASK 05
// var date = new Date();
// var currentDate = date.getDate();
// if(currentDate < 16){
//     document.write("First fifteen days of the month.");
// }
// else{
//     document.write("Last days of the month.");
// }


// TASK 06
// var minutes = new Date();
// var crntMiliSec = minutes.getTime();
// var currentMin = crntMiliSec / (1000 * 60 * 60);
// document.write("Current Date : " + minutes);
// document.write("<br>Ellapsed milliseconds since January 1, 1970 : " + crntMiliSec);
// document.write("<br>Elapsed minutes since January 1, 1970 : " + currentMin);


// TASK 07
// var date = new Date();
// var hours = date.getHours();
// if (hours < 12) {
//     alert("It's AM")
// }
// else {
//     alert("It's PM");
// }


// TASK 08
// var date = new Date("Dec 31, 2020");
// document.write("Later date : " + date);


// TASK 09
// var dateRamzan = new Date("Apr 24, 2020");
// var currentDate = new Date();
// dateRamzan = dateRamzan.getTime();
// currentDate = currentDate.getTime();
// var diff = currentDate - dateRamzan;
// diff = diff / (1000 * 60 * 60 * 24);
// diff = Math.floor(diff);
// document.write(diff);


// TASK 10
// var date2020 = new Date("Jan 1, 2020");
// var refDate = new Date("Dec 5, 2020");
// var seconds2020 = date2020.getTime();
// var secondsRef = refDate.getTime();
// var diff = secondsRef - seconds2020;   //THIS IS CORRECT. BOTH ARE SAME
// var diff = refDate - date2020;        //THIS IS ALSO CORRECT. BOTH ARE SAME
// diff = Math.floor(diff / 1000);
// document.write("On reference date " + refDate + ", " + diff + " seconds had passed since beginning of 2020");


// TASK 11
// var d = new Date();
// document.write("Current date : " + d + "<br>");
// var hours = d.getHours();
// d.setHours(hours - 1);
// document.write("1 hour ago, it was " + d);


// TASK 12
// var d = new Date();
// document.write("Current date : " + d + "<br>");
// var years = d.getFullYear();
// d.setFullYear(years - 100);
// document.write("100 years back, it was " + d);


// TASK 13
// var age = prompt("What is your age?");
// var d = new Date();
// var year = d.getFullYear();
// d.setFullYear(year - age);
// var birthYear = d.getFullYear();
// document.write("Your age is " + age);
// document.write("<br>Your birth year is " + birthYear);


// TASK 14
// var customerName = "Daniyal Ahmed Khan";
// var month = "December";
// var numberOfUnits = 410;
// var chargesPerunit = 16;
// var netAmount = numberOfUnits * chargesPerunit;
// var latePayment = 350;
// var grossAmount = netAmount + latePayment;
// document.write("K-Electric Bill<br><br>".fontsize(6));
// document.write("Customer Name : <b>" + customerName + "</b><br>Month : <b>" + month +
//     "</b><br>Number of units : <b>" + numberOfUnits + "</b><br>Charges per unit : <b>" + chargesPerunit +
//     "</b><br><br>Net Amount Payable (within Due Date) : <b>" + netAmount + "</b><br>Late payment surcharge : <b>" +
//     latePayment + "</b><br>Gross Amount Payable (after Due Date) : <b>" + grossAmount + "</b>");










// CHAPTER 35 - 38
// TASK 01
// function currentDate(){
//     document.write(Date());
// }
// currentDate();


// TASK 02
// function name(){
//     var firstName = prompt("Enter your first name");
//     var lastName = prompt("Enter your last name");
//     var fullName = firstName + lastName;
//     alert(firstName + " " + lastName + ", you are welcome on our website");
// }
// name();


// TASK 03
// function addNumbers(){
//     var num1 = prompt("Enter first number");
//     var num2 = prompt("Enter second number");
//     var sum = +num1 + +num2;
//     document.write("The sum of two numbers is " + sum);
// }
// addNumbers();


// TASK 04
// function calc(num1, opr, num2) {
//     if (opr === "+") {
//         return num1 + num2;
//     }
//     else if (opr === "-") {
//         return num1 - num2;
//     }
//     else if (opr === "*") {
//         return num1 * num2;
//     }
//     else if (opr === "/") {
//         return num1 / num2;
//     }
//     else if (opr === "%") {
//         return num1 % num2;
//     }
//     else {
//         return "Incorrect operator";
//     }
// }
// num1 = 5, num2 = 5;
// var result = calc(num1, "-", num2);
// document.write("The difference of " + num1 + " and " + num2 + " is " + result);

// num1 = 4, num2 = 6;
// result = calc(4, "*", 6);
// document.write("<br>The product of " + num1 + " and " + num2 + " is " + result);

// num1 = 4, num2 = 6;
// result = calc(4, "$", 6);
// document.write("<br>" + result);

// num1 = 10, num2 = 5;
// result = calc(10, "/", 5);
// document.write("<br>The division of " + num1 + " and " + num2 + " is " + result);

// num1 = 8, num2 = 8;
// result = calc(8, "+", 8);
// document.write("<br>The sum of " + num1 + " and " + num2 + " is " + result);

// num1 = 9, num2 = 3;
// result = calc(9, "%", 3);
// document.write("<br>The remainder of " + num1 + " and " + num2 + " is " + result);


// TASK 05
// function square(sq) {
//     return sq * sq;
// }
// var num = prompt("Enter any number");
// document.write("Squared " + num + " is " + square(num));


// TASK 06
// function factorial(fac) {
//     var a1 = 1;
//     if (fac == 0 || fac == 1) {
//         return a1;
//     }
//     else {
//         for (var i = fac; i >= 1; i--) {
//             a1 = a1 * i;
//         }
//         return a1;
//     }
// }
// var a = prompt("Enter a number");
// document.write("The factorial of " + a + " is " + factorial(a));


// TASK 07
// function counting() {
//     var startNum = +prompt("Enter starting point");
//     var endNum = +prompt("Enter ending point");
//     for (var i = startNum; i <= endNum; i++) {
//         document.write(i + "<br>");
//     }
// }
// counting();


// TASK 08
// function calcHypotenuse(b, p) {
//     b = b * b;
//     p = p * p;
//     var hsq = +b + +p;
//     var hsqrt = calcSquare();
//     function calcSquare(){
//         var hroot = Math.sqrt(hsq);
//         return hroot;
//     }
//     return hsqrt;
// }
// var base = prompt("Enter base of a right angled triangle");
// var perpendicular = prompt("Enter perpendicular of a right angled triangle");
// var hyp = calcHypotenuse(base, perpendicular);
// hyp = hyp.toFixed(2);
// document.write("The hypotenuse of right angled triangle is " + hyp);


// TASK 09
// function areaOfRectangle(w, h) {
//     var a = w * h;
//     return a;
// }
// var width = 30;
// var height = 10;
// var area1 = areaOfRectangle(20, 5);
// var area2 = areaOfRectangle(width, height);
// document.write("The area of rectangle (when arguments are as value) is : " + area1);
// document.write("<br>The area of rectangle (when arguments are as variables) is : " + area2);


// TASK 10
// function palindrome(str) {
//     var check = str.toLowerCase();
//     var array =[];
//     array = check.split("");
//     array = array.reverse();
//     array = array.join("");
//     if(check === array){
//         return "It is palindrome";
//     }
//     else{
//         return "It is not palindrome"
//     }
// }
// var string = prompt("Enter a word to check whether it is palindrome or not");
// var a = palindrome(string);
// document.write(a);


// TASK 11
// function firstLetterCapital(str) {
//     var array = [];
//     array = str.split("");
//     for (var i = 0; i < array.length; i++) {
//         if (i == 0) {
//             array[i] = array[i].toUpperCase();
//         }
//         else {
//             if (array[i] === " ") {
//                 array[i + 1] = array[i + 1].toUpperCase();
//             }
//         }
//     }
//     array = array.join("");
//     return array;
// }
// var string = prompt("Enter any string");
// var a = firstLetterCapital(string);
// document.write("Example String : " + string + "<br>Expected Output : " + a);


// TASK 12
// function longestWord(str) {
//     var array = [];
//     var longWord = "";
//     array = str.split(" ");
//     for (var i = 0; i < array.length; i++) {
//         if (array[i].length > longWord.length) {
//             longWord = array[i];
//         }
//     }
//     return longWord;
// }
// var string = prompt("Enter any string");
// var a = longestWord(string);
// document.write("Entered string : " + string + "<br>Longest word in the string : " + a);


// TASK 13
// function occurrenceOfLetter(str, let) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] == let.toLowerCase() || str[i] == let.toUpperCase()) {
//             count++;
//         }
//     }
//     return count;
// }
// var string = prompt("Enter a string");
// var letter = prompt("Enter a letter");
// var a = occurrenceOfLetter(string, letter);
// document.write("The letter " + letter + " occurred " + a + " times in " + string + ".");


// TASK 14
// function calcCircumference(rad) {
//     var circumference = 2 * Math.PI * rad;
//     return circumference;
// }
// function calcArea(rad) {
//     var area = Math.PI * (rad * rad);
//     return area;
// }
// var radius = prompt("Enter radius of circle");
// var output1 = calcCircumference(radius);
// var output2 = calcArea(radius);
// output1 = output1.toFixed(2);
// output2 = output2.toFixed(2);
// document.write("The Circumference of circle is " + output1 + "<br>and the Area of circle is " + output2);