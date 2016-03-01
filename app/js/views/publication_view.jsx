import React, { Component } from 'react'
import store from '../redux/store'
import { newPublication, updatePublication } from '../redux/actions'
import { Link } from 'react-router'
import AvatarRowComponent from '../components/avatar_row_component'
import AvatarComponent from '../components/avatar_component'
import ContributionsListView from './contributions_list_view'
import IconElement from '../elements/icon_element'

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
    this.state = store.getState().publication
  }

  componentDidMount() {
    const publicationId = this.props.routeParams.publicationId
    this.unsubscribe = store.subscribe(() => this.setState(store.getState().publication))
    $.get(`http://localhost:4000/publications/${publicationId}`)
      .done(({ publication }) => store.dispatch(updatePublication(publication)))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    if(!this.state.title) {
      return <div></div>
    }
    const user = this.state._embedded.users[0]

    return (
      <div id="publication-view" className="container">
        <div className="row">
          <h1>{this.state.title}</h1>
          <img className="circle" src={user.photo_url} />
          <div className="author-data">
            <div className="author">{user.first_name} {user.last_name}</div>
            <div className="updated-at">updated Jan 28, 2016</div>
          </div>
          <h2>Abstract</h2>
          <p>{this.state.abstract}</p>
          <h2>Sections</h2>
          {this.state._embedded.sections.map((section) => {
            return (
              <div>
                <h6>{section.title}</h6>
                <p>{section.body}</p>
              </div>
            )
          })}
          <Link to={`/publications/${this.props.routeParams.publicationId}/reviews/new`}><IconElement iconType="material" iconName="rate_review" /></Link>
        </div>
      </div>
    )
  }
}
