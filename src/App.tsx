import { BrowserRouter } from 'react-router-dom'
import { Router } from "./Router"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CartContextProvider } from './context/CartContext'


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>  
      <GlobalStyle />
    </ThemeProvider>
  )
}
