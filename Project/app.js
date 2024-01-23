let secretNumber = Math.floor(Math.random() * 10) + 1;
let insertedNumber = 0;
let attempts = 1;
let maximunAttempts = 3;

while (insertedNumber != secretNumber) {
  insertedNumber = parseInt(prompt("Please, insert a number from 1 to 10."));
  console.log(secretNumber, insertedNumber);
  if (insertedNumber == secretNumber)
    alert(
      `Congratulations! You got the secret number (${secretNumber}), in ${attempts} ${
        attempts == 1 ? "attempt" : "attempts"
      }.`
    );
  else {
    if (insertedNumber > secretNumber)
      alert("Sorry, the secret number is less.");
    else alert("Sorry, the secret number is greater.");
    attempts++;
    wordAttempts = "attempts";
    if (attempts > maximunAttempts) {
      alert(`You reached the maximum number of ${maximunAttempts} attempts`);
      break;
    }
  }
}
