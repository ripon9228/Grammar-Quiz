const quizData = [
  { q: "1. She ___ to school every day.", options: ["go", "goes", "going"], answer: "goes" },
  { q: "2. They ___ playing football now.", options: ["is", "are", "am"], answer: "are" },
  { q: "3. I have ___ apples.", options: ["some", "any", "much"], answer: "some" },
  { q: "4. He ___ finished his homework.", options: ["has", "have", "having"], answer: "has" },
  { q: "5. The book is ___ the table.", options: ["in", "on", "at"], answer: "on" },
  { q: "6. She is taller ___ her brother.", options: ["than", "then", "that"], answer: "than" },
  { q: "7. I ___ to the party yesterday.", options: ["go", "went", "gone"], answer: "went" },
  { q: "8. This is the ___ movie I’ve ever seen.", options: ["good", "better", "best"], answer: "best" },
  { q: "9. They ___ here since morning.", options: ["were", "are", "have been"], answer: "have been" },
  { q: "10. He ___ a car.", options: ["don't have", "doesn't have", "hasn't"], answer: "doesn't have" },
  { q: "11. She sings ___.", options: ["beautiful", "beautifully", "beauty"], answer: "beautifully" },
  { q: "12. I prefer tea ___ coffee.", options: ["than", "to", "over"], answer: "to" },
  { q: "13. She asked me ___ I was fine.", options: ["if", "that", "what"], answer: "if" },
  { q: "14. The dog ___ loudly.", options: ["barks", "bark", "barking"], answer: "barks" },
  { q: "15. We ___ dinner at 7 PM.", options: ["have", "having", "has"], answer: "have" },
  { q: "16. He will go if it ___ rain.", options: ["doesn't", "don't", "didn't"], answer: "doesn't" },
  { q: "17. This pen is ___ than that one.", options: ["cheap", "cheaper", "cheapest"], answer: "cheaper" },
  { q: "18. I haven’t seen him ___ last week.", options: ["for", "since", "from"], answer: "since" },
  { q: "19. She ___ TV when I called.", options: ["was watching", "watched", "watching"], answer: "was watching" },
  { q: "20. They ___ to finish the work.", options: ["try", "tries", "trying"], answer: "try" }
];

// Generate quiz questions
const quizContainer = document.getElementById("quiz");

quizData.forEach((item, index) => {
  const div = document.createElement("div");
  div.classList.add("question");

  div.innerHTML = `
    <p><strong>${item.q}</strong></p>
    <div class="options">
      ${item.options
        .map(
          opt => `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label>`
        )
        .join("")}
    </div>
  `;

  quizContainer.appendChild(div);
});

// Submit button functionality
document.getElementById("submitBtn").addEventListener("click", () => {
  let score = 0;

  quizData.forEach((item, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === item.answer) {
      score++;
    }
  });

  document.getElementById("result").innerHTML =
    `You scored <strong>${score}</strong> out of <strong>${quizData.length}</strong>.`;
});
