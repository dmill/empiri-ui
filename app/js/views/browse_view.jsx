import React, { Component } from 'react'
import store from '../redux/store'
import { Link } from 'react-router'
import IconElement from '../elements/icon_element'

const PublicationPreview = ({ publicationId, title, abstract, name, photoUrl }) => {
  return (
    <Link to={`/publications/${publicationId}`} className="publication-preview-element">
      <h2>{title}</h2>
      <h3>Abstract:</h3>
      <p>{abstract}</p>
      <div className="publication-preview-element-footer">
        <img src={photoUrl} />
        <div>{name} & 23 others</div>
      </div>
    </Link>
  )
}

export default class BrowseView extends Component {
  componentWillMount() {
    this.state = { publications: [] }
    $.get('http://localhost:4000/publications').done(({ publications }) => {
      this.setState({ publications })
    })
  }

  render() {
    return (
      <div id="browse-view" className="container">
        <div id="header"><h6>Top Publications</h6></div>
        <div className="row">
          <div className="twelve columns publications-column-container">
            <div className="eight columns publications-column">
              {this.state.publications.map((publication, i) => {
                return (
                  <PublicationPreview
                    publicationId={publication.id}
                    title={publication.title}
                    abstract={publication.abstract}
                    key={i}
                    photoUrl={publication._embedded.users[0].photo_url}
                  />
                )
              })}
            </div>
            <div className="four columns publications-feed">
              <h6 className="title">Publication Updates</h6>
              <div className="feed-menu clear-fix">
                <Link to="/publications/new" className="menu-item">
                  <IconElement iconType="material" iconName="note_add" />
                  <h6>New Publication</h6>
                </Link>
                <div className="menu-item"><h6>Influence: 0</h6></div>
              </div>
              <div className="notifications">You dont have any notifications.</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
