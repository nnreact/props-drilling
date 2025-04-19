function Button({Text,idm, onClick}) {
  return (
      <button className={`btn ${idm ? "light-bg dark-text" : "dark-bg light-text"}`} onClick={onClick}>{Text}</button>
  )
}

export default Button
