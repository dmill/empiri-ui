import React, { Component } from 'react'
import store from '../redux/store'
import { Link } from 'react-router'
import IconElement from '../elements/icon_element'

const PublicationPreview = (props) => {
  return (
    <div className="publication-preview">
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
          <div className="eight columns publications-column">
            <h1><IconElement iconName="trending_up" iconType="material" />Trending Topics</h1>
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
