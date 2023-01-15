import { $, after } from "@/functions"

const blue = $("#blue")
const black = $("#black")

export const showBluePage = () => {
  black.style.display = "none"
  blue.style.display = "flex"

  after(1, () => (blue.style.cursor = `url(assets/cursor/waiting.cur), auto`))

  after(
    1 + 0.5,
    () => (blue.style.cursor = `url(assets/cursor/default.cur), auto`)
  )

  after(
    1 + 0.5 + 0.3,
    () => (blue.style.cursor = `url(assets/cursor/waiting.cur), auto`)
  )

  after(
    1 + 0.5 + 0.3 + 0.2,
    () => (blue.style.cursor = `url(assets/cursor/default.cur), auto`)
  )

  // TODO: We should add a start button for user to click
  const loadingSound = new Audio("assets/audio/loading.mp3")
  blue.addEventListener(
    "mousemove",
    (e) => {
      loadingSound.play()
    },
    { once: true }
  )
}
