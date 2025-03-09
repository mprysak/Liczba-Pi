document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".rebus").forEach(rebus => {
      const button = rebus.querySelector("button");
      const input = rebus.querySelector("input");
      const feedback = rebus.querySelector(".feedback");
      const correctAnswer = rebus.dataset.answer.toLowerCase();

      button.addEventListener("click", function() {
          const userAnswer = input.value.trim().toLowerCase();

          if (userAnswer === correctAnswer) {
              feedback.textContent = "✅ Poprawna odpowiedź!";
              feedback.classList.add("correct");
              feedback.classList.remove("incorrect");
          } else {
              feedback.textContent = "❌ Błędna odpowiedź. Spróbuj ponownie!";
              feedback.classList.add("incorrect");
              feedback.classList.remove("correct");
          }
      });
  });
});