// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onIncrementCount = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onDecrementCount = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  onIncrese = () => {
    const {speed} = this.state

    if (speed < 100) {
      return (
        <h1 className="counter-heading">
          Speed is <span className="normal">{speed}</span>mph
        </h1>
      )
    }

    return (
      <h1 className="counter-heading">
        Speed is <span className="danger">{speed}</span>mph
      </h1>
    )
  }

  render() {
    return (
      <div className="counter-container">
        <h1 className="speedometer">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="speedometer"
          className="image"
        />
        {this.onIncrese()}
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={this.onIncrementCount}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="button-1"
            onClick={this.onDecrementCount}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
