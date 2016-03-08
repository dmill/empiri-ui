import React, { Component } from 'react'
import auth0 from '../auth0/auth0'
import store from '../redux/store'
import { Link, browserHistory, Navigation } from 'react-router'
// import { Tour } from 'tether-shepherd'
import IconElement from '../elements/icon_element'
import PopoverComponent from '../components/popover_component'

export default class NavBarView extends Component {
  componentWillMount() {
    this.state = { currentUser: store.getState().currentUser }
    store.subscribe(() => this.setState({ currentUser: store.getState().currentUser }))
  }

  onSignIn(response) {
    this.props.history.push('browse/' + '#access_token=' + arguments[3] + '&id_token=' + arguments[2] + '&token_type=Bearer')
    auth0.authenticate()
    // this.startTour()
  }

  showLock() {
    this.props.lock.show({
      icon: 'https://s3-us-west-1.amazonaws.com/www.empiri.co/images/symbol.png',
      socialBigButtons: true,
      authParams: {
        scope: 'openid email given_name family_name picture'
      }
    }, this.onSignIn.bind(this))
  }

  startTour() {
    const tour = new Tour({ defaults: { classes: 'shepherd-theme-arrows' }})
    tour.addStep('welcome', {
      title: 'Welcome to Empiri!',
      text: 'Welcome to Empiri! We have worked hard to make this a publishing platform that works for you!',
      advanceOn: '.docs-link click'
    })
    tour.addStep('write', {
      title: 'Get Started!',
      text: 'Click here to begin writing your first publication!',
      attachTo: '.menu-item left',
      advanceOn: '.menu-item click',
      buttons: []
    })
    tour.addStep('title', {
      title: 'Title',
      text: 'write a title!',
      attachTo: 'input top',
      advanceOn: '.docs-link click'
    })
    tour.start()
  }

  showSignup() {
    this.props.lock.showSignup({
      icon: 'https://s3-us-west-1.amazonaws.com/www.empiri.co/images/symbol.png',
      socialBigButtons: true,
      authParams: {
        scope: 'openid email given_name family_name picture'
      }
    })
    // }, this.startTour)
  }

  signOut() {
    auth0.logout()
  }

  popoverItems() {
    return ([
      <h6 key="1" className="popover-header">Welcome <strong>{this.state.currentUser.first_name}!</strong></h6>,
      <Link key="2" className="popover-item" to="/publications/new"><h6>publish a paper</h6></Link>,
      <Link key="3" className="popover-item" to={`/users/${this.state.currentUser.id}`}><h6>your account</h6></Link>,
      <Link key="4" className="popover-item" to="/" onClick={this.signOut}><h6>log out</h6></Link>,
      <a key="5" className="popover-item" href={`mailto:andrew@empiri.co`}><h6>need help?</h6></a>,
    ])
  }

  render() {
    if (!this.state.currentUser.id) {
      return (
        <nav id="nav-bar-view">
          <div className="container">
            <div className="row">
              <div className="five columns">
                <Link className="link" to="/"><img id="logo" src="images/symbol.png" width="20px" /></Link>
                <Link className="link" to="/browse"><h6>Browse</h6></Link>
                <a className="link" href="http://empiri.co/faq.html"><h6>FAQ</h6></a>
              </div>
              <div className="seven columns login-buttons">
                <button onClick={this.showSignup.bind(this)}>Sign up</button>
                <button onClick={this.showLock.bind(this)}>Sign in</button>
              </div>
            </div>
          </div>
        </nav>
      )
    } else {
      return (
        <nav id="nav-bar-view">
          <div className="container">
            <div className="row">
              <div className="five columns">
                <Link className="link" to="/"><img id="logo" src="images/symbol.png" width="20px" /></Link>
                <Link className="link" to="/browse"><h6>Browse</h6></Link>
                <Link className="link" to="/"><h6>FAQ</h6></Link>
              </div>
              <div className="seven columns secondary">
                <PopoverComponent
                  direction="down"
                  items={this.popoverItems()}
                  select={
                    <span className="popover-select">
                      <img src={this.state.currentUser.photo_url} height="29" width="29" />
                      <IconElement iconName="caret-down" iconType="fontawesome" />
                    </span>
                  } />
              </div>
            </div>
          </div>
        </nav>
      )
    }
  }
}

