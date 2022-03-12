(function () {
  setTimeout(() => {
    $("#black").style.display = "none";
    $("#blue").style.display = "flex";
    setTimeout(() => {
      $("#blue").style.cursor = `url(assets/waiting.cur), auto`;
    }, 1000);
    setTimeout(() => {
      $("#blue").style.cursor = `url(assets/default.cur), auto`;
    }, 1000 + 500);
    setTimeout(() => {
      $("#blue").style.cursor = `url(assets/waiting.cur), auto`;
    }, 1000 + 500 + 300);
    setTimeout(() => {
      $("#blue").style.cursor = `url(assets/default.cur), auto`;
    }, 1000 + 500 + 300 + 200);
    // TODO: We should add a start button for user to click
    const loadingSound = new Audio("assets/loading.mp3");
    $("#blue").addEventListener(
      "mousemove",
      (e) => {
        loadingSound.play();
      },
      { once: true }
    );
  }, 3000);

  function $(s) {
    return document.querySelector(s);
  }
})();
