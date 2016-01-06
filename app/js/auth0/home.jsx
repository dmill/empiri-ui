import React, { Component } from 'react'

export default class Home extends Component {
  showLock() {
    this.props.route.lock.show({
      authParams: {
        scope: 'openid email given_name family_name picture'
      }
    })
  }

  render() {
    return (
      <div className="login-box auth0-box before">
        <img src="https://i.cloudup.com/StzWWrY34s.png" />
        <h3>Auth0 Example</h3>
        <p>Zero friction identity infrastructure, built for developers</p>
        <a onClick={this.showLock.bind(this)} className="btn btn-primary btn-lg btn-login btn-block">Sign In</a>
      </div>
    )
  }
}
