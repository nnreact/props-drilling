import { useContext } from "react"
import { ThemeContext } from "./App"

function Title({Text}) {
  const idm = useContext(ThemeContext);
  return (
    <h1 className={idm ? "light-text" : "dark-text"}>
        {Text}
    </h1>
  )
}

export default Title