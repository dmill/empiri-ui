import React, { Component } from 'react'
import store from '../redux/store'

const Pub = (props) => {
  return (
    <div style={{border: "1px solid #bbb", borderRadius: "3px"}}>
      <h4>{props.title}</h4>
      <img src={props.picture} />
      {props.name}
    </div>
  )
}

export default class BrowseView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const user = store.getState().currentUser.profile
    return (
      <div id="browse-view">
        <div className="row">
          <div className="seven columns">
            <h1>Trending Publications</h1>
            <Pub title={this.props.data.title} picture={user.picture} name={user.name} />
            <Pub title={this.props.data.title} picture={user.picture} name={user.name} />
            <Pub title={this.props.data.title} picture={user.picture} name={user.name} />
            <Pub title={this.props.data.title} picture={user.picture} name={user.name} />
            <Pub title={this.props.data.title} picture={user.picture} name={user.name} />
          </div>

          <div className="four columns">
            <h2>Your Updates</h2>
            You dont have any papers yet.  Create one..
          </div>
        </div>
      </div>
    )
  }
}
