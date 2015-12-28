import React, { Component } from 'react'
import store from '../redux/store'
import { Link } from 'react-router'
import IconElement from '../elements/icon_element'

const PublicationPreview = ({ title, abstract, name, picture }) => {
  return (
    <Link to="/hypothesis" className="publication-preview-element">
      <h2>{title}</h2>
      <h3>Abstract:</h3>
      <p>{abstract}</p>
      <div className="publication-preview-element-footer">
        <img src={picture} />
        <div>{name} & 23 others</div>
      </div>
    </Link>
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
            <PublicationPreview title={data.title} abstract={data.abstract} picture={user.picture} name={user.name} />
            <PublicationPreview title={data.title} abstract={data.abstract} picture={user.picture} name={user.name} />
            <PublicationPreview title={data.title} abstract={data.abstract} picture={user.picture} name={user.name} />
            <PublicationPreview title={data.title} abstract={data.abstract} picture={user.picture} name={user.name} />
            <PublicationPreview title={data.title} abstract={data.abstract} picture={user.picture} name={user.name} />
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
