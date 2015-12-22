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
    this.props.lock.show()
  }

  signOut() {
    localStorage.removeItem('userToken')
    store.dispatch(logOut())
  }

  popoverItems() {
    return ([
        <Link to="/user">your account</Link>,
        'support',
        <Link to="/user">log out</Link>
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
              <span>
                <a href="#">Browse</a>
              </span>
              <span>
                <a href="#">FAQ</a>
              </span>

              <button>Sign up</button>
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
              <span>
                <a href="#">Browse</a>
              </span>
              <span>
                <a href="#">FAQ</a>
              </span>

              <PopoverComponent
                content={<img src={this.state.profile.picture} height="25" width="25" />}
                direction="down"
                items={this.popoverItems()} />

              <button onClick={this.signOut.bind(this)}>Log Out</button>
            </div>
          </div>
        </nav>
      )
    }
  }
}
