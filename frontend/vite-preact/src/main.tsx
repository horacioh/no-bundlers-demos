import { render } from "preact"
import { App } from "./app"
import { Theme } from "ui/theme"
import "./index.css"

render(
  <Theme>
    <App />
  </Theme>,
  document.getElementById("app")!
)
