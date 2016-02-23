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
              <Link to={`/publications/${publication.id}`} className={`publication ${this.renderClassName(publication.published)}`} key={i}>
                <button>edit</button>
                {this.renderIcon(publication.published)}
                <div className="title">{publication.title}</div>
                {this.renderStatus(publication.published)}
              </Link>
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
