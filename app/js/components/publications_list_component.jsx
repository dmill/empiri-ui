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

  render() {
    return (
      <div className="publications-list-component">
        {this.props.publications.map((publication, i) => {
          return (
            <Link to={`/publications/${publication.id}`} className={`publication ${this.renderClassName(publication.published)}`} key={i}>
              {this.renderIcon(publication.published)}
              <div className="title">{publication.title}</div>
              {this.renderStatus(publication.published)}
            </Link>
          )
        })}
      </div>
    )
  }
}
