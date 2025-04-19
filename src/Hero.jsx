import Title from "./Title.jsx";
import Button from "./Button.jsx";
function Hero({isDarkMode}) {
  return (
    <div className="hero-section">
        <Title idm={isDarkMode} Text="NN Solutions" />      
        <Button idm={isDarkMode} Text="Contact us" />      
    </div>
  )
}

export default Hero
