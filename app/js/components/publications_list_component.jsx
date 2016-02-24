import React, { Component } from 'react'
import IconElement from '../elements/icon_element'
import { Link } from 'react-router'

export default class PublicationsListComponent extends Component {
  renderIcon(isPublished) {
    if (isPublished) {
      return <IconElement iconType="material" iconName="public" />
    } else {
      return <IconElement iconType="material" iconName="build" />
    }
  }

  renderStatus(isPublished) {
    if (isPublished) {
      return <div className="status">published</div>
    } else {
      return <div className="status">in progress</div>
    }
  }

  renderClassName(isPublished) {
    if (isPublished) {
      return "published"
    } else {
      return "in-progress"
    }
  }

  renderPublications() {
    if (this.props.publications.length) {
      return (
        <div>
          {this.props.publications.map((publication, i) => {
            return (
              <div className={`publication ${this.renderClassName(publication.published)}`} key={i}>
                <Link to={`/publications/${publication.id}/edit`}><button>edit</button></Link>
                {this.renderIcon(publication.published)}
                <Link to={`/publications/${publication.id}`} className="title clear-fix">{publication.title}</Link>
                {this.renderStatus(publication.published)}
              </div>
            )
          })}
        </div>
      )
    } else {
      return <div>You don&rsquo;t have any publications yet.  Write one!</div>
    }
  }

  render() {
    return (
      <div className="publications-list-component">
        {this.renderPublications()}
      </div>
    )
  }
}
