// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrese = () => {
    this.setState(prevState => ({speed: prevState.speed + 10}))
  }

  render() {
    const {speed} = this.state
    return (
      <div>
        <h1>Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="avatar"
          className="img"
        />
        <div>
          <h1 onClick={this.onIncrese()}>Speed is {speed}mphs</h1>
          <p>Min Limit is 0mphs,Max Limit is 200mph</p>
          <button type="button">Accelerate</button>
          <button type="button">Accelerate</button>
        </div>
      </div>
    )
  }
}

export default Speedometer
