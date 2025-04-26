import { useContext } from "react"
import { ThemeContext } from "./App";

function Header() {

  const isDarkMode = useContext(ThemeContext);


  return (
    <header>
        <p className={isDarkMode ? "light-text" : "dark-text"}>Logo</p>
        <button className={`btn ${isDarkMode ? "light-bg dark-text" : "dark-bg light-text"}`}>Login</button>
    </header>
  )
}

export default Header
