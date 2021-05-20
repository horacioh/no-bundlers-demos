import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import { Theme } from "ui/theme"
import { Box } from "ui/box"
import docs from "@mintter/api/documents/v1alpha/documents_grpc_web_pb"

function App() {
  console.log(docs.DraftsClient)

  const [count, setCount] = useState(0)

  return (
    <Theme>
      <Box>
        <Box as="header" className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Vite + React!</p>
          <p>
            <button onClick={() => setCount((count) => count + 1)}>
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {" | "}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </Box>
      </Box>
    </Theme>
  )
}

export default App
