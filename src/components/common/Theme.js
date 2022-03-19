import React from "react"
import { ThemeProvider } from "styled-components"
import { yarnoTheme } from "@yarno/thread"

import "sanitize.css"
import "../../styles/app.css"
import "../../styles/typography.css"
import "../../styles/embedded-woff.css"
import "@reach/dialog/styles.css"

const Theme = ({ children }) => {
  return <ThemeProvider theme={yarnoTheme}>{children}</ThemeProvider>
}
export default Theme