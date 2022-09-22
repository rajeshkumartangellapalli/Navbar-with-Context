import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          <div
            className={
              isDarkTheme
                ? 'dark-mode-not-found-container'
                : 'light-mode-not-found-container'
            }
          >
            <img
              className="not-found-image"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1
              className={
                isDarkTheme
                  ? 'dark-mode-not-found-heading'
                  : 'light-mode-not-found-heading'
              }
            >
              Lost Your Way?
            </h1>
            <p
              className={
                isDarkTheme
                  ? 'dark-mode-not-found-description'
                  : 'light-mode-not-found-description'
              }
            >
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
