// Write your code here
import './index.css'

import Header from '../Header/index'

const About = props => {
  return (
    <>
      <Header />
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
          alt="about"
        />
      </div>
    </>
  )
}

export default About
