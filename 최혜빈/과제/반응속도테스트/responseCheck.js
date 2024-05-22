document.addEventListener("DOMContentLoaded", () => {
  const screen = document.querySelector("#screen");
  const result = document.querySelector("#result");

  let startTime;
  let endTime;
  let responseTime;
  let records = [];
  let timeoutId;

  screen.addEventListener("click", () => {
    if (screen.classList.contains("waiting")) {
      screen.classList.replace("waiting", "ready");
      screen.textContent = "초록색이 되면 클릭하세요.";
      timeoutId = setTimeout(() => {
        startTime = new Date();
        screen.classList.replace("ready", "now");
        screen.textContent = "클릭하세요!";
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (screen.classList.contains("ready")) {
      clearTimeout(timeoutId);
      screen.textContent = "너무 성급하시군요!";
      screen.classList.replace("ready", "waiting");
    } else if (screen.classList.contains("now")) {
      endTime = new Date();
      responseTime = endTime - startTime;
      records.push(responseTime);
      let Avg =
        records.reduce((acc, cur) => {
          return acc + cur;
        }, 0) / records.length;
      result.textContent =
        "현재: " + responseTime + "ms, " + "평균: " + Avg + "ms";
      screen.classList.replace("now", "waiting");
      screen.textContent = "클릭해서 시작하세요!";
    }
  });
});
