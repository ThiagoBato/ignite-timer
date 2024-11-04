
import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"

import { Router } from "./routes/root"
import { CyclesContextProvider } from "./contexts/CyclesContext"

import { defaultTheme } from "./styles/themes/default"
import { GlobalStyles } from "./styles/global"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
