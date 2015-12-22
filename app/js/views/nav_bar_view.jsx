import React, { Component } from 'react'
import store from '../redux/store'
import DropdownListComponent from '../components/dropdown_list_component'
import IconElement from '../elements/icon_element'
import PopoverSelectComponent from '../components/popover_select_component'
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

  renderAccountDropdown() {
    return (
      <DropdownListComponent items={['your account', 'support', 'log out']}/>
    )
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

              <PopoverSelectComponent
                content={<img src={this.state.profile.picture} height="25" width="25" />}
                popoverContent={
                  <PopoverComponent direction="up" content={this.renderAccountDropdown()} />
                } />

              <button onClick={this.signOut.bind(this)}>Log Out</button>
            </div>
          </div>
        </nav>
      )
    }
  }
}
