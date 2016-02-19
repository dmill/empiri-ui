import React, { Component } from 'react'
import store from '../redux/store'
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
    this.state = {}
    const publicationId = this.props.routeParams.publicationId
    $.get(`http://localhost:4000/publications/${publicationId}`)
      .done(({ publication }) => {
        this.state = publication
      })
  }

  render() {
    const user = {
      user_id: "linkedin|2qdTsGouxA",
      picture: "http://a.deviantart.net/avatars/y/_/y-u-no-guyplz.png?1",
      name: "Andrew Wong"
    }

    return (
      <div id="publication-view" className="container">
        <div className="row">
          <h1>Contributions</h1>
          <Link to="/review-papers/new"><IconElement iconType="material" iconName="note_add" /></Link>
        </div>
      </div>
    )
  }
}
