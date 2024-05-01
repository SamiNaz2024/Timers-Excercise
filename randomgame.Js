function randomGame() {
  let times = 0;
  let timer = setInterval(function () {
    let num = Math.random();
    times++;
    console.log("Random Number:", num.toFixed(2));
    if (num > 0.75) {
      clearInterval(timer);
      console.log("It took " + times + " try/tries.");
    }
  }, 1000);
}
