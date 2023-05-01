import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeShowContent = () => {
        onToggleShowContent()
      }

      const onChangeShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-controller-bg-container">
          <div className="configuration-controller-responsive-container">
            <h1 className="configuration-controller-title">Layout</h1>
            <div className="controller-container">
              <input
                type="checkbox"
                id="contentController"
                checked={showContent}
                className="input-controller"
                onChange={onChangeShowContent}
              />
              <label htmlFor="contentController" className="input-label">
                Content
              </label>
            </div>
            <div className="controller-container">
              <input
                type="checkbox"
                id="leftNavbarController"
                checked={showLeftNavbar}
                className="input-controller"
                onChange={onChangeShowLeftNavbar}
              />
              <label htmlFor="leftNavbarController" className="input-label">
                Left Navbar
              </label>
            </div>
            <div className="controller-container">
              <input
                type="checkbox"
                id="rightNavbarController"
                checked={showRightNavbar}
                className="input-controller"
                onChange={onChangeShowRightNavbar}
              />
              <label htmlFor="rightNavbarController" className="input-label">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
