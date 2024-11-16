// Write your code here
import './index.css'

import Header from '../Header/index'

const Home = props => {
  return (
    <>
      <Header />
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="Home"
        />
      </div>
    </>
  )
}

export default Home
