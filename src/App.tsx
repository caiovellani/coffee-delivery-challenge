import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { CartContextProvider } from "./contexts/CartProvider";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {

  return (
   <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />

    <CartContextProvider>
       <Header />
       <Outlet />
    </CartContextProvider>
   </ThemeProvider>
  )
}


