let secretNumber = Math.floor(Math.random() * 10) + 1;
let insertedNumber = prompt("Please, insert a number from 1 to 10.");

if (insertedNumber == secretNumber) alert('Congratulations! You got the secret number.');
else alert('Sorry, you did not get the secret number.');