import * as React from "react"
import { Box } from "ui/box"
import { Text } from "ui/text"

export const App: React.FC = () => (
  <Box>
    <Text
      css={{
        color: "$text-default",
        fontSize: "$3xl",
        fontWeight: "$bold",
        textAlign: "center",
      }}
    >
      Hello World!
    </Text>
  </Box>
)
