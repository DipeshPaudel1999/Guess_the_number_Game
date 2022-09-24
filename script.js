'use strict';
// const secretNumber = (document.querySelector('.message').textContent = 'Whats the guess?');
// console.log(secretNumber);
// document.querySelector('.number').textContent = 999;
// document.querySelector('.guess').value = 19;
// console.log(document.querySelector('.number').value);

// const secretNumber = function () {
//   console.log(23);
// };

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.log('.guess').value);
//   console.log(guess);
//   if (!guess) {
//     document.querySelector('.message').textContent = 'invalid input';
//   }
// });

const displayMsg = function (msg) {
  document.querySelector('.message').textContent = msg;
};
// displayMessage('hello');

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let life = 10;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  if (!guess) {
    displayMsg('Invalid input');
    // document.querySelector('.message').textContent = "That's invalid input!";
  } else if (guess === secretNumber) {
    if (life > highscore) {
      document.querySelector('.highscore').textContent = life;
    }
    displayMsg('You win🏆🥇');
    // document.querySelector('.message').textContent =
    //   'Congratulations! You Win';
  } else if (guess !== secretNumber) {
    if (life > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Little Lower, Try again!' : 'Little Higher';
      life--;
      document.querySelector('.life').textContent = life;
    } else {
      // document.querySelector('.message').textContent = 'You Lose😵';
      displayMsg('You lose😵❌');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  life = 10;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMsg('Guess Again...😉');
  document.querySelector('.life').textContent = life;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.body').style.backgroundColor = '#aaa';
});
