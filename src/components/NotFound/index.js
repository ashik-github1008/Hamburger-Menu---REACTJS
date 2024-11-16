// Write your code here
import './index.css'

import Header from '../Header/index'

const NotFound = props => {
  return (
    <>
      <Header />
      <div className="app-container">
        <div className="not-found-main-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
            className="not-found-img"
          />
          <h1 className="not-found-page-heading">Lost Your Way?</h1>
          <p>
            Sorry, we cannot find that page. You will find lots to explore on the
            home page
          </p>
        </div>
      </div>
    </>
  )
}

export default NotFound
