import React from 'react'
import { Counter } from './Counter'
import { Box } from "@chakra-ui/react"

export { Page }

function Page() {
  return (
    <Box p={20} bgColor="red">
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </Box>
  )
}
