import { Logo } from "./logo"
import { Text } from "ui/text"

export function App() {
  return (
    <>
      <Logo />
      <Text as="p">Hello Vite + Preact!</Text>
      <Text>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </Text>
    </>
  )
}
