import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      console.log(isDarkTheme)

      return (
        <>
          <Navbar />
          <div className={isDarkTheme ? 'dark-mode-home' : 'light-mode-home'}>
            {isDarkTheme ? (
              <img
                className="home-image"
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
              />
            ) : (
              <img
                className="home-image"
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
              />
            )}
            <h1 className={isDarkTheme ? 'dark-mode-text' : 'light-mode-text'}>
              Home
            </h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
