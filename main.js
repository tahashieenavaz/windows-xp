import { after, $ } from "@/functions"
import { showBluePage } from "@/pages"
import settings from "@/settings"

import "./styles/animations.css"
import "./styles/main.css"
import "./styles/pages/black.css"
import "./styles/pages/blue.css"
import "./styles/pages/desktop.css"

after(settings.duration.black, showBluePage)
after(settings.duration.black + settings.duration.blue, () => {
  $("#blue").style.display = "none"
  $("#desktop").style.display = "grid"
})
