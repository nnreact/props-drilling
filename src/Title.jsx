function Title({Text, idm}) {
  return (
    <h1 className={idm ? "light-text" : "dark-text"}>
        {Text}
    </h1>
  )
}

export default Title