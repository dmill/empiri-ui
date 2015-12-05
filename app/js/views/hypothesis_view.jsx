import React, { Component } from 'react'
import store from '../redux/store'

const Avatar = (props) => {
  return (
    <span style={{float: "left", paddingRight: "2em"}}>
      <img src={props.picture} />
      <h6 style={{fontSize: "12px"}}>{props.name}</h6>
    </span>
  )
}

export default class HypothesisView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const data = this.props.data
    const user = store.getState().currentUser.profile
    return (
      <div id="hypothesis-view">
        <div className="row">
          <h2>{data.category}</h2>
          <h1>{data.title}</h1>
          <Avatar name={user.name} picture={user.picture} />
          <Avatar name={user.name} picture={user.picture} />
          <Avatar name={user.name} picture={user.picture} />
          <Avatar name={user.name} picture={user.picture} />
        </div>
        <div className="row">
          <h3>Abstract: {data.abstract}</h3>
        </div>
      </div>
    )
  }
}
