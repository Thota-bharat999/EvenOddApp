import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrease = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state

    const number = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="even-container">
        <div className="odd-container">
          <h1>Count {count}</h1>
          <p className="order-even">Count is {number}</p>
          <button className="button" type="button" onClick={this.onIncrease}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
