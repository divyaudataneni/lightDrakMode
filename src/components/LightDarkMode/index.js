// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onChangeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const mode = isDarkMode ? 'dark' : 'light'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className={`container ${mode}`}>
        <div className="card-cont">
          <h1 className="heading">Click To Change Mode</h1>
          <button
            className="DarkButton"
            onClick={this.onChangeMode}
            type="button"
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
