import React, { Component } from 'react'
import store from '../redux/store'
import { Link } from 'react-router'

const PublicationPreview = (props) => {
  return (
    <div style={{border: "1px solid #bbb", borderRadius: "3px"}}>
      <Link to="/hypothesis"><h4>{props.title}</h4></Link>
      <img src={props.picture} />
      {props.name}
    </div>
  )
}

export default class BrowseView extends Component {
  render() {
    const user = store.getState().currentUser.profile
    const data = store.getState().currentUser.data
    return (
      <div id="browse-view">
        <div className="row">
          <div className="seven columns">
            <h1>Trending Publications</h1>
            <PublicationPreview title={data.title} picture={user.picture} name={user.name} />
            <PublicationPreview title={data.title} picture={user.picture} name={user.name} />
            <PublicationPreview title={data.title} picture={user.picture} name={user.name} />
            <PublicationPreview title={data.title} picture={user.picture} name={user.name} />
            <PublicationPreview title={data.title} picture={user.picture} name={user.name} />
          </div>

          <div className="four columns">
            <h2>Your Updates</h2>
            You dont have any publications yet.  Create one..
          </div>
        </div>
      </div>
    )
  }
}
