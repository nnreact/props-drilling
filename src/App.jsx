import Header from "./Header"
import Hero from "./Hero"
import "./App.css";
import { useState } from "react";
import Button from "./Button";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div style={{height: "100vh"}} className={isDarkMode ? "dark-bg" : "light-bg"}>

        <Button idm={isDarkMode} onClick={() => setIsDarkMode(!isDarkMode)} Text="Toggle Dark Mode" />
      
        <Header isDarkMode={isDarkMode}/>
        <Hero isDarkMode={isDarkMode}s/>
    </div>
  )
}

export default App
