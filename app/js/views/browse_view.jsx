import React, { Component } from 'react'
import store from '../redux/store'
import { Link } from 'react-router'
import IconElement from '../elements/icon_element'
import ajax from '../lib/ajax'

const PublicationPreview = ({ updatedAt, publicationId, title, abstract, firstName, lastName, photoUrl, authorId }) => {
  return (
    <div className="publication-preview-element">
      <Link to={`/publications/${publicationId}`}>
        <h1>{title}</h1>
      </Link>
      <Link to={`/users/${authorId}`}><img className="circle" src={photoUrl} /></Link>
      <div className="author-data">
        <Link to={`/users/${authorId}`}><div className="author">{firstName} {lastName}</div></Link>
        <div className="updated-at">updated Jan 28, 2016</div>
      </div>
      <h2>Abstract</h2>
      <p>{abstract}</p>
      <div className="publication-preview-element-footer">
        <Link to={`/publications/${publicationId}`}>Full publication...</Link>
      </div>
    </div>
  )
}

export default class BrowseView extends Component {
  componentWillMount() {
    this.state = { publications: [] }
    ajax.request({
      type: 'GET',
      url: `${ajax.getDomain()}/publications`,
      success: ({ publications }) => this.setState({ publications }),
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
                    firstName={publication._embedded.users[0].first_name}
                    lastName={publication._embedded.users[0].last_name}
                    key={i}
                    updatedAt={publication.updated_at}
                    photoUrl={publication._embedded.users[0].photo_url}
                    authorId={publication._embedded.users[0].id}
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
              </div>
              <div className="notifications">You dont have any notifications.</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
