import React, { Component } from 'react'
import store from '../redux/store'
import { Link } from 'react-router'
import IconElement from '../elements/icon_element'
import ajax from '../lib/ajax'
import AuthorMetadataElement from '../elements/author_metadata_element'
import Immutable from 'immutable'

const PublicationPreview = ({ updatedAt, publicationId, title, abstract, author }) => {
  return (
    <div className="publication-preview-element">
      <Link to={`/publications/${publicationId}`}>
        <h1>{title}</h1>
      </Link>
      <AuthorMetadataElement author={author} updatedAt={updatedAt} />
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
                    author={Immutable.fromJS(publication._embedded.users[0])}
                    key={i}
                    updatedAt={publication.updated_at}
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
