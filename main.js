import "./styles/animations.css"
import "./styles/main.css"
import "./styles/pages/black.css"
import "./styles/pages/blue.css"

import { $, after } from "@/functions"

after(3, () => {
  $("#black").style.display = "none"
  $("#blue").style.display = "flex"

  after(1, () => ($("#blue").style.cursor = `url(assets/waiting.cur), auto`))

  after(
    1 + 0.5,
    () => ($("#blue").style.cursor = `url(assets/default.cur), auto`)
  )

  after(
    1 + 0.5 + 0.3,
    () => ($("#blue").style.cursor = `url(assets/waiting.cur), auto`)
  )

  after(
    1 + 0.5 + 0.3 + 0.2,
    () => ($("#blue").style.cursor = `url(assets/default.cur), auto`)
  )

  // TODO: We should add a start button for user to click
  const loadingSound = new Audio("assets/loading.mp3")
  $("#blue").addEventListener(
    "mousemove",
    (e) => {
      loadingSound.play()
    },
    { once: true }
  )
})
