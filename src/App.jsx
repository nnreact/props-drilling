import Header from "./Header"
import Hero from "./Hero"
import "./App.css";
import { createContext, useState } from "react";
import Button from "./Button";


export const ThemeContext = createContext(false);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={isDarkMode}>
      <div style={{ height: "100vh" }} className={isDarkMode ? "dark-bg" : "light-bg"}>

        <Button onClick={() => setIsDarkMode(!isDarkMode)} Text="Toggle Dark Mode" />

        <Header />
        <Hero />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
