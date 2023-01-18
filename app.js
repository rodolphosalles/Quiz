const form = document.querySelector(".quiz-form");
const correctAnswers = ["A", "B", "B", "B"];
const finalScoreContainer = document.querySelector(".final-score-container");

let score = 0;
let counter = 0;
let timer = null;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const getUserAnswer = () => {
    let userAnswers = [];
    correctAnswers.map((_, index) => {
      const answerUser = form[`inputQuestion${index + 1}`].value;
      userAnswers.push(answerUser);
    });
    return userAnswers;
  };

  const userScore = (userAnswers) => {
    userAnswers.forEach((answer, index) => {
      const answerCorrect = answer === correctAnswers[index];
      if (answerCorrect) score += 25;
    });
  };

  const animateScore = () => {
    scrollTo(0, 0);
    finalScoreContainer.classList.remove("d-none");
  };

  const showScore = () => {
    timer = setInterval(() => {
      if (counter === score) clearInterval(timer);

      finalScoreContainer.querySelector("span").textContent = ` ${counter++}%`;
    }, 100);
  };

  getUserAnswer();
  userScore(getUserAnswer());
  animateScore();
  showScore();
});
