if (current >= quizData.length) {
  questionEl.innerText = "Oyun bitdi!";
  answersEl.innerHTML = "";
  let finalMessage = balance >= 15
    ? "🎉 Aferin Leman! Məni az da olsa tanıyırsan! 💖"
    : "😢 Ayıb olsun Leman... Məni tanımırmışsan, olsun...";

  scoreEl.innerHTML = balance > 0
    ? `<div class="money">+${balance}$</div><p>${finalMessage}</p>`
    : `<div class="loss">${balance}$</div><p>${finalMessage}</p>`;
  return;
}
