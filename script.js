// rule button
const rules = () => {
  let a = document.getElementById("rules-div");
  a.classList.toggle("display");
};

// get button data choice
const buttons = document.querySelectorAll(".game-btn");

let userChoice = undefined;

//chek button data choice and event click
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.getAttribute("data-choice");
    // console.log(userChoice);
    document.getElementById("trio").classList.toggle("display");
    document.getElementById("el_place").classList.toggle("display");
    let a = setTimeout(() => {
      document.getElementById("house").classList.toggle("display");
      document.getElementById("b-wait").classList.toggle("display");
    }, 1000);
    let b = setTimeout(() => {
      document.getElementById("play-button").classList.toggle("display");
    }, 2000);

    checkwinner();
  });
});

const play_again = document.getElementById("play-btn");
play_again.addEventListener("click", () => {
  document.getElementById("play-button").classList.toggle("display");
  document.getElementById("b-wait").classList.toggle("display");
  document.getElementById("house").classList.toggle("display");
  document.getElementById("el_place").classList.toggle("display");
  document.getElementById("trio").classList.toggle("display");
  user_select.classList.remove("win_shadow");
  house_select.classList.remove("win_shadow");
});

const user_select = document.getElementById("user");
const house_select = document.getElementById("house");

// ganerate random word
let game_word = ["rock", "paper", "scissors"];
const randomWord = () => {
  let random = Math.floor(Math.random() * 3);
  let word = game_word[random];
  return word;
};

const updateselection = (selectionEL, choice) => {
  selectionEL.classList.remove("paper-btn");
  selectionEL.classList.remove("scissors-btn");
  selectionEL.classList.remove("rock-btn");

  const img = selectionEL.querySelector("img");
  selectionEL.classList.add(choice + "-btn");
  img.src = "images/icon-" + choice + ".svg";
};

const you = document.getElementById("you");

//chek the condition of win loose and draw
const checkwinner = () => {
  const computerChoice = randomWord();
  // console.log(computerChoice);

  updateselection(user_select, userChoice);
  updateselection(house_select, computerChoice);

  if (userChoice === computerChoice) {
    // console.log("draw");
    you.innerText = "It's Draw";
    //draw
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    // console.log("win");
    setTimeout(() => {
      user_select.classList.add("win_shadow");
    }, 2000);
    you.innerText = "YOU WIN";
    //win
    updateScore(1);
  } else {
    //loose
    // console.log("looose");
    setTimeout(() => {
      house_select.classList.add("win_shadow");
    }, 2000);
    you.innerText = "YOU LOSE";
    updateScore(-1);
  }
};

let score = 0;
const scoreEl = document.getElementById("score_num");

// update score
const updateScore = (value) => {
  score += value;
  let sc = setTimeout(() => {
    scoreEl.innerText = score;
  }, 2000);
};
