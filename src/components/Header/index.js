// Write your code here
import './index.css'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const overlayStyles = {
  backgroundColor: '#ffff',
  width: '100%',
}

const Header = props => {
  return (
    <nav className="header-container">
      <nav className="header-content-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="website-logo"
          />
        </Link>
        <Popup
          modal
          trigger={
            <button
              className="hamburger-menu-btn"
              type="button"
              data-testid="hamburgerIconButton"
            >
              <GiHamburgerMenu className="hamburger-icon" />
            </button>
          }
          overlayStyle={overlayStyles}
          className="popup-content"
        >
          {close => (
            <div className="model-container">
              <button
                className="close-btn"
                data-testid="closeButton"
                type="button"
                onClick={() => close()}
              >
                <IoMdClose />
              </button>
              <ul className="home-about-link-container">
                <Link className="navigate-link" to="/">
                  <li className="home-link-container">
                    <AiFillHome />
                    <p className="link-text">Home</p>
                  </li>
                </Link>
                <Link className="navigate-link" to="/about">
                  <li className="about-link-container">
                    <BsInfoCircleFill />
                    <p className="link-text">About</p>
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </Popup>
      </nav>
    </nav>
  )
}

export default Header
