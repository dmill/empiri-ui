import React from 'react'
import { Link } from 'react-router'

const AuthorMetadataElement = ({ author }) => {
  return (
    <Link to={`users/${author.get('id')}`} className="author-metadata element">
      <img className="circle" src={author.get('photo_url')} />
      <div className="metadata">
        <div className="author">{author.get('first_name')} {author.get('last_name')}</div>
        <div className="updated-at">updated Jan 28, 2016</div>
      </div>
    </Link>
  )
}

export default AuthorMetadataElement
