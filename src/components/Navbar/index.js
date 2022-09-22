import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickToggleTheme = () => {
        toggleTheme()
      }

      return (
        <div
          className={
            isDarkTheme
              ? 'dark-mode-navbar-container'
              : 'light-mode-navbar-container'
          }
        >
          {isDarkTheme ? (
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="website logo"
            />
          ) : (
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
            />
          )}
          <ul className="nav-list">
            <li className="nav-item">
              <Link
                className={
                  isDarkTheme ? 'dark-Theme-nav-link' : 'light-theme-nav-link'
                }
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  isDarkTheme ? 'dark-Theme-nav-link' : 'light-theme-nav-link'
                }
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          <button
            className="light-dark-button"
            type="button"
            onClick={onClickToggleTheme}
            testid="theme"
          >
            {isDarkTheme ? (
              <img
                className="change-mode-image"
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
              />
            ) : (
              <img
                className="change-mode-image"
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
              />
            )}
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
