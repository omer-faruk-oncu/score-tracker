const scoreToWin = document.querySelector("#score-to-win");
const player1Btn = document.querySelector(".left-player");
const player2Btn = document.querySelector(".right-player");
const resetBtn = document.querySelector(".reset");
const scorePlayer1 = document.querySelector(".player-1");
const scorePlayer2 = document.querySelector(".player-2");


scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;
scoreToWin.focus()

player1Btn.addEventListener("click", () => {
  if (scorePlayer1.textContent < parseInt(scoreToWin.value)) {
    scorePlayer1.textContent++;
  }
  if (scorePlayer1.textContent == parseInt(scoreToWin.value)) {
    scorePlayer1.style.color = "green";
    scorePlayer2.style.color = "red";
    player1Btn.disabled = true;
    player2Btn.disabled = true;
  }
});

player2Btn.addEventListener("click", () => {
  if (scorePlayer2.textContent < parseInt(scoreToWin.value)) {
    scorePlayer2.textContent++;
  }
  if (scorePlayer2.textContent == parseInt(scoreToWin.value)) {
    scorePlayer2.style.color = "green";
    scorePlayer1.style.color = "red";
    player1Btn.disabled = true;
    player2Btn.disabled = true;
  }
});

resetBtn.addEventListener("click", () => {
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  scoreToWin.value = "";
  scorePlayer2.style.color = "black";
  scorePlayer1.style.color = "black";
  player1Btn.disabled = false;
  player2Btn.disabled = false;
  scoreToWin.focus()
});
