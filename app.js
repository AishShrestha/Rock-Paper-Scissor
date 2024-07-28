let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgPara = document.querySelector("#msg");
const compScorePara = document.querySelector("#comp-score");
const userScorePara = document.querySelector("#user-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};
const drawGame = () => {
  console.log("game was draw.");
  msgPara.innerText = "Game was Draw.Play again";
  msgPara.style.backgroundColor = "grey";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerHTML = userScore;
    msgPara.innerText = `You win. Your ${userChoice} beats computer's ${compChoice}`;
    msgPara.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerHTML = compScore;
    console.log("You lose!!");
    msgPara.innerText = `You lose. Computer's ${compChoice} beats your ${userChoice}`;
    msgPara.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("User choice:", userChoice);
  //Generate computer choice
  const compChoice = genCompChoice();
  console.log("Computer choice:", compChoice);

  if (userChoice === compChoice) {
    //draw
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      //scissors,paper
      userWin = compChoice == "paper" ? false : true;
    } else if (userChoice == "scissors") {
      userWin = compChoice == "paper" ? true : false;
    } else {
      userWin = compChoice == "rock" ? true : false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
