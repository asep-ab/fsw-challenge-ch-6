
let playerScore = 0;
let comScore = 0;
const playerScore_span = document.getElementById("player-score");
const comScore_span = document.getElementById("com-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".text-versus");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
// console.log(getComChoice());


function win(playerChoice, comChoice) {
  playerScore++;
  playerScore_span.innerHTML = playerScore;
  comScore_span.innerHTML = comScore;
  result_div.innerHTML = "PLAYER 1 WINS!";
  document.getElementById('result').classList.remove('text-versus');
  document.getElementById('result').classList.add('game-result');

  console.log("PLAYER 1 WINS!");
  console.log("Player 1 vs COM = " + playerScore + " : " + comScore);

  document.getElementById(playerChoice).classList.add('get-clicked');
  document.getElementById(`${comChoice}-com`).classList.add('get-clicked');
  setTimeout(() => document.getElementById(playerChoice).classList.remove('get-clicked'), 1000);
  setTimeout(() => document.getElementById(`${comChoice}-com`).classList.remove('get-clicked'), 1000);
}

function lose(playerChoice, comChoice) {
  comScore++;
  playerScore_span.innerHTML = playerScore;
  comScore_span.innerHTML = comScore;
  result_div.innerHTML = "COM WINS!";
  document.getElementById('result').classList.remove('text-versus');
  document.getElementById('result').classList.add('game-result');

  console.log("PLAYER 1 LOSES!");
  console.log("Player 1 vs COM = " + playerScore + " : " + comScore);

  document.getElementById(playerChoice).classList.add('get-clicked');
  document.getElementById(`${comChoice}-com`).classList.add('get-clicked');
  setTimeout(() => document.getElementById(playerChoice).classList.remove('get-clicked'), 1000);
  setTimeout(() => document.getElementById(`${comChoice}-com`).classList.remove('get-clicked'), 1000);
}

function draw(playerChoice, comChoice) {
  result_div.innerHTML = "DRAW!";
  document.getElementById('result').classList.remove('text-versus');
  document.getElementById('result').classList.add('game-result');

  console.log("DRAW!");
  console.log("Player 1 vs COM = " + playerScore + " : " + comScore);

  document.getElementById(playerChoice).classList.add('get-clicked');
  document.getElementById(`${comChoice}-com`).classList.add('get-clicked');
  setTimeout(() => document.getElementById(playerChoice).classList.remove('get-clicked'), 1000);
  setTimeout(() => document.getElementById(`${comChoice}-com`).classList.remove('get-clicked'), 1000);
}

function game(playerChoice) {
  // console.log("gsdahkha " + playerChoice);
  const comChoice = getComChoice();
  console.log("PLAYER 1's Choice --> " + playerChoice)
  console.log("COM's Choice --> " + comChoice)
  switch (playerChoice + comChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(playerChoice, comChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(playerChoice, comChoice);
      break;
    case "rr":
    case "ss":
    case "pp":
      draw(playerChoice, comChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function () {
    console.log("------START!! You clicked on Rock------");
    game("r");
  })
  paper_div.addEventListener('click', function () {
    console.log("------START!! You clicked on Paper------");
    game("p");
  })
  scissors_div.addEventListener('click', function () {
    console.log("------START!! You clicked on Scissors------");
    game("s");
  })
}
main();

/* Reset tampilan game dengan tombol refresh */
const refreshGame = document.querySelector('.refresh');

function resetGame() {
  refreshGame.addEventListener('click', function () {

    playerScore = 0;
    comScore = 0;
    result_div.innerHTML = "VS";
    document.getElementById('result').classList.add('text-versus');
    document.getElementById('result').classList.remove('game-result');
    
    // /* Hapus tulisan hasil dalam result */
    // textResult.innerHTML = '';
    console.log("------ You clicked on REFRESH! Starting from 0 : 0 ------")
    console.log(`Player 1 vs COM = ${playerScore} : ${comScore}`);

    // /* Hilangkan kembali class result */
    // resultClass.classList.remove('result');

    // /* Hilangkan kembali seluruh greyBox */
    // for (let i = 0; i < compBox.length; i++) {
    // 	playerBox[i].style.backgroundColor = '#9c835f';
    // 	compBox[i].style.backgroundColor = '#9c835f';
    // }

    // /* Tampilkan kembali tulisan VS */
    // versus.style.color = 'rgb(189,48,46)';

    /* Reset kembali result menjadi null agar dapat melakukan permainan kembali */
    // result = null;
  });
}
resetGame();
