const PasswordItem = props => {
  const {details, onClicking, isChecked} = props
  const {website, id, username, password} = details
  const onClick = () => {
    onClicking(id)
  }
  const passwordUrl = (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="starts"
    />
  )
  return (
    <li>
      <h1>{website[0].toUpperCase()}</h1>
      <p>{website}</p>
      <p>{username}</p>
      <p>{isChecked ? password : passwordUrl}</p>
      <button onClick={onClick} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default PasswordItem