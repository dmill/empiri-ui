import React, { Component } from 'react'
import store from '../redux/store'
import { newPublication, updatePublication } from '../redux/actions'
import { Link } from 'react-router'
import AvatarRowComponent from '../components/avatar_row_component'
import AvatarComponent from '../components/avatar_component'
import ContributionsListView from './contributions_list_view'
import IconElement from '../elements/icon_element'
import ajax from '../lib/ajax'
import FiguresComponent from '../components/figures_component'
import RatingsComponent from '../components/ratings_component'

const Avatar = (props) => {
  return (
    <span style={{float: "left", paddingRight: "2em"}}>
      <img src={props.picture} />
      <h6 style={{fontSize: "12px"}}>{props.name}</h6>
    </span>
  )
}

export default class PublicationView extends Component {
  componentWillMount() {
    store.dispatch(newPublication())
    this.state = { publication: store.getState().publication }
  }

  componentDidMount() {
    const publicationId = this.props.routeParams.publicationId
    this.unsubscribe = store.subscribe(() => this.setState({ publication: store.getState().publication }))
    ajax.request({
      type: 'GET',
      url: `${ajax.getDomain()}/publications/${publicationId}`,
      success: ({ publication }) => store.dispatch(updatePublication(publication))
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const publication = this.state.publication
    const user = publication.getIn(['_embedded', 'users']).get(0)
    if (!user) {
      return <div></div>
    }
    return (
      <div id="publication-view" className="container">
        <div className="row">
          <RatingsComponent publication={publication} />
          <h1>{publication.get('title')}</h1>
          <img className="circle" src={user.get('photo_url')} />
          <div className="author-data">
            <Link to={`users/${user.get('id')}`}><div className="author">{user.get('first_name')} {user.get('last_name')}</div></Link>
            <div className="updated-at">updated Jan 28, 2016</div>
          </div>
          <h2>Abstract</h2>
          <p>{publication.get('abstract')}</p>
          <h2>Sections</h2>
          {publication.getIn(['_embedded', 'sections']).map((section) => {
            return (
              <div key={section.get('id')}>
                <h6>{section.get('title')}</h6>
                <p>{section.get('body')}</p>
                <FiguresComponent figures={section.get('figures')} />
              </div>
            )
          })}
          <h3>Contribute to this Publication</h3>
          <RatingsComponent position="left" publication={publication} />
          <div className="contribute-review-container">
            <Link to={`/publications/${this.props.routeParams.publicationId}/reviews/new`}><IconElement iconType="material" iconName="rate_review" /> contribute a review</Link>
          </div>
        </div>
      </div>
    )
  }
}
