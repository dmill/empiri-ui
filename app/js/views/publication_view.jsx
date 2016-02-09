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
  render() {
    const data = {
      title: "TIPR: transcription initiation pattern recognition on a genome scale",
      abstract: "The computational identification of gene transcription start sites (TSSs) can provide insights into the regulation and function of genes without performing expensive experiments, particularly in organisms with incomplete annotations. High-resolution general-purpose TSS prediction remains a challenging problem, with little recent progress on the identification and differentiation of TSSs which are arranged in different spatial patterns along the chromosome."
    }
    const user = {
      user_id: "linkedin|2qdTsGouxA",
      picture: "https://media.licdn.com/mpr/mprx/0_Vu55r8ZE3voudRCP4WNnriodTqxuwZiP4wlVriEVYAwgNpq1nEvWY_Oq7s0tHxGxR7bU0kNQ7Yd9",
      name: "Andrew Wong"
    }
    const avatars = [
      <AvatarComponent key="1"id={user.user_id} name={user.name} imgSrc={user.picture} />,
      <AvatarComponent key="2"id={user.user_id} name={user.name} imgSrc={user.picture} />,
      <AvatarComponent key="3"id={user.user_id} name={user.name} imgSrc={user.picture} />,
      <AvatarComponent key="4"id={user.user_id} name={user.name} imgSrc={user.picture} />,
      <AvatarComponent key="5"id={user.user_id} name={user.name} imgSrc={user.picture} />,
      <AvatarComponent key="6"id={user.user_id} name={user.name} imgSrc={user.picture} />,
      <AvatarComponent key="7"id={user.user_id} name={user.name} imgSrc={user.picture} />
    ]
    return (
      <div id="publication-view">
        <div className="row">
          <h1>{data.title}</h1>
          <AvatarRowComponent avatars={avatars} />
        </div>
        <div className="row">
          <h3>Abstract: {data.abstract}</h3>
        </div>
        <div className="row">
          <h1>Contributions</h1>
          <Link to="/review-papers/new"><IconElement iconType="material" iconName="note_add" /></Link>
          <ContributionsListView />
        </div>
      </div>
    )
  }
}
