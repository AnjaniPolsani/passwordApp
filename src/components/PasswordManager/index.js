import {Component} from 'react'

import './index.css'

import {v4} from 'uuid'

import PasswordItem from '../PasswordItem'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    websiteInput: '',
    passwordInput: '',
    usernameInput: '',
    isChecked: false,
    searchInput: '',
  }

  onChangeWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangeCheck = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onAdd = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state
    const newItem = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newItem],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  onClickingDelete = id => {
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(each => id !== each.id),
    }))
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      passwordsList,
      isChecked,
      searchInput,
    } = this.state
    const searchResults = passwordsList.filter(each =>
      each.website.toLowerCase().startsWith(searchInput.toLowerCase()),
    )
    return (
      <div>
        <div className="cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
        </div>
        <div>
          <h1>Add New Password</h1>
          <form onSubmit={this.onAdd}>
            <div className="cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                type="text"
                placeholder="Enter Website"
                value={websiteInput}
                onChange={this.onChangeWebsite}
              />
            </div>
            <div className="cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="website"
              />
              <input
                type="text"
                placeholder="Enter Username"
                value={usernameInput}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="website"
              />
              <input
                type="password"
                placeholder="Enter Password"
                value={passwordInput}
                onChange={this.onChangePassword}
              />
            </div>
            <button type="submit">Add</button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="img"
          />
        </div>
        <div>
          <div>
            <div>
              <h1>Your Passwords</h1>
              <p>{searchResults.length}</p>
            </div>
            <div className="cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                placeholder="search"
                type="search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
            <label htmlFor="check">Show Passwords</label>
            <input type="checkbox" id="check" onChange={this.onChangeCheck} />
          </div>
         
            {searchResults.length === 0 ? (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="img"
                />
                <p>No Passwords</p>
              </div>
            ) : (
               <ul>
              {searchResults.map(each => (
                <PasswordItem
                  details={each}
                  key={each.id}
                  onClicking={this.onClickingDelete}
                  isChecked={isChecked}
                />
              ))}
              </ul>
              
            )}
          
        </div>
      </div>
    )
  }
}
export default PasswordManager
