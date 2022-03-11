(function () {
  setTimeout(() => {
    $("#black").style.display = "none";
    $("#blue").style.display = "flex";
  }, 3000);
  function $(s) {
    return document.querySelector(s);
  }

  function animate(elements, endState, duration = 300) {
    elements.forEach(($el) => {
      $($el).animate([endState], { duration, fill: "forwards" });
    });
  }
})();
