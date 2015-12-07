import React, { Component } from 'react'
import lock from './lock'

export default class Home extends Component {
  showLock() {
    lock.show()
  }

  render() {
    return (
      <div className="login-box auth0-box before">
        <img src="https://i.cloudup.com/StzWWrY34s.png" />
        <h3>Auth0 Example</h3>
        <p>Zero friction identity infrastructure, built for developers</p>
        <a onClick={this.showLock} className="btn btn-primary btn-lg btn-login btn-block">Sign In</a>
      </div>
    )
  }
}
