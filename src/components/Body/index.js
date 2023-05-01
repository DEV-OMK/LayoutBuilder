import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const renderLeftNavbar = () => (
        <div className="left-navbar-container">
          <h1 className="left-navbar-title">Left Navbar Menu</h1>
          <ul className="left-navbar-content-container">
            <li className="left-navbar-item">Item 1</li>
            <li className="left-navbar-item">Item 2</li>
            <li className="left-navbar-item">Item 3</li>
            <li className="left-navbar-item">Item 4</li>
          </ul>
        </div>
      )

      const renderContent = () => (
        <div className="content-container">
          <h1 className="content-title">Content</h1>
          <p className="content-item">
            Lorem ipsum dollor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempore incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      )

      const renderRightNavbar = () => (
        <div className="right-navbar-container">
          <h1 className="right-navbar-title">Right Navbar Menu</h1>
          <div className="right-navbar-content-container">
            <p className="right-navbar-item">Ad 1</p>
            <p className="right-navbar-item">Ad 2</p>
          </div>
        </div>
      )

      return (
        <div className="body-bg-container">
          {showLeftNavbar && renderLeftNavbar()}
          {showContent && renderContent()}
          {showRightNavbar && renderRightNavbar()}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
