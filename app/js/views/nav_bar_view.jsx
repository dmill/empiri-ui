import React, { Component } from 'react'
import store from '../redux/store'
import IconElement from '../elements/icon_element'
import PopoverComponent from '../components/popover_component'
import { Link } from 'react-router'
import { logOut } from '../redux/actions'

export default class NavBarView extends Component {
  componentWillMount() {
    this.state = { profile: store.getState().currentUser.profile }
    store.subscribe(() => this.setState({ profile: store.getState().currentUser.profile }))
  }

  showLock() {
    this.props.lock.show({
      icon: 'https://s3-us-west-1.amazonaws.com/www.empiri.co/images/symbol.png',
      socialBigButtons: true
    })
  }

  showSignup() {
    this.props.lock.showSignup({
      icon: 'https://s3-us-west-1.amazonaws.com/www.empiri.co/images/symbol.png',
      socialBigButtons: true
    })
  }

  signOut() {
    localStorage.removeItem('userToken')
    store.dispatch(logOut())
  }

  popoverItems() {
    return ([
      <span key="1" className="popover-header">Welcome <strong>{this.state.profile.given_name}!</strong></span>,
      <Link key="2" className="popover-item" to="/user">your account</Link>,
      <Link key="3" className="popover-item" to="user">support</Link>,
      <Link key="4" className="popover-item" to="/user">log out</Link>
    ])
  }

  render() {
    if (!this.state.profile) {
      return (
        <nav>
          <div className="container">
            <div className="row">
              <Link to="/"><img src="images/symbol.png" width="20px" /></Link>
              <input type="text" placeholder="Search Empiri" />
              <Link to="/browse">Browse</Link>
              <span>
                <a href="#">FAQ</a>
              </span>

              <button onClick={this.showSignup.bind(this)}>Sign up</button>
              <button onClick={this.showLock.bind(this)}>Sign in</button>
            </div>
          </div>
        </nav>
      )
    } else {
      return (
        <nav>
          <div className="container">
            <div className="row">
              <Link to="/"><img src="images/symbol.png" width="20px" /></Link>
              <input type="text" placeholder="Search Empiri" />
              <Link to="/browse">Browse</Link>
              <span>
                <a href="#">FAQ</a>
              </span>

              <PopoverComponent
                direction="down"
                items={this.popoverItems()}
                select={
                  <span className="popover-select">
                    <img src={this.state.profile.picture} height="25" width="25" />
                    <IconElement iconName="caret-down" iconType="fontawesome" />
                  </span>
                } />

              <button onClick={this.signOut.bind(this)}>Log Out</button>
            </div>
          </div>
        </nav>
      )
    }
  }
}
