import React, { Component } from 'react'
import { Link } from 'react-router'
import HovercardComponent from './hovercard_component'

const RatingsComponent = ({ publication, position }) => {
  return (
    <Link to={`/publications/${publication.get('id')}/reviews`} className={`ratings component clear-fix ${position}`}>
      <div className="rating-box">
        <HovercardComponent
          select={
            <div>
              <span className="count">{publication.get('negative_review_count')}</span>
              <span className="type">rejections</span>
            </div>
          }
        content="The number of reviewers who have rejected this publication" />
      </div>
      <div className="rating-box">
        <HovercardComponent
          select={
            <div>
              <span className="count">{publication.get('needs_revision_review_count')}</span>
              <span className="type">requests</span>
            </div>
          }
          content="The number of reviewers who have requested a revision to this publication" />
      </div>
      <div className="rating-box">
        <HovercardComponent
          select={
            <div>
              <span className="count">{publication.get('positive_review_count')}</span>
              <span className="type">endorsements</span>
            </div>
          }
        content="The number of reviewers who have endorsed this publicaton" />
      </div>
    </Link>
  )
}

export default RatingsComponent
