const predictionSpan = document.getElementById("prediction");
const periodSpan = document.getElementById("period");

const options = ["BIG", "SMALL"];

function getCurrentPeriod() {
  return Math.floor(Date.now() / 30000);
}

function updatePrediction() {
  const period = getCurrentPeriod();
  const random = options[Math.floor(Math.random() * options.length)];
  periodSpan.textContent = `#${period}`;
  predictionSpan.textContent = random;
}

updatePrediction();
setInterval(updatePrediction, 30000);
