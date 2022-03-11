(function () {
  function $(s) {
    return document.querySelector(s);
  }

  function animate(elements, endState, duration = 300) {
    elements.forEach(($el) => {
      $($el).animate([endState], { duration, fill: "forwards" });
    });
  }
})();
