import { useContext } from "react"
import { ThemeContext } from "./App"

function Button({Text, onClick}) {
  const idm = useContext(ThemeContext);
  return (
      <button className={`btn ${idm ? "light-bg dark-text" : "dark-bg light-text"}`} onClick={onClick}>{Text}</button>
  )
}

export default Button
