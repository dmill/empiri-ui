import React, { Component } from 'react'
import store from '../redux/store'
import AvatarComponent from '../components/avatar_component'

const Avatar = (props) => {
  return (
    <span style={{float: "left", paddingRight: "2em"}}>
      <img src={props.picture} />
      <h6 style={{fontSize: "12px"}}>{props.name}</h6>
    </span>
  )
}

export default class HypothesisView extends Component {
  render() {
    const data = {
      title: "TIPR: transcription initiation pattern recognition on a genome scale"
    }
    const user = {
      user_id: "linkedin|2qdTsGouxA",
      picture: "https://media.licdn.com/mpr/mprx/0_Vu55r8ZE3voudRCP4WNnriodTqxuwZiP4wlVriEVYAwgNpq1nEvWY_Oq7s0tHxGxR7bU0kNQ7Yd9",
      name: "Andrew Wong"
    }
    return (
      <div id="hypothesis-view">
        <div className="row">
          <h1>{data.title}</h1>
          <AvatarComponent id={user.user_id} name={user.name} imgSrc={user.picture} />
        </div>
        <div className="row">
          <h3>Abstract: {data.abstract}</h3>
        </div>
      </div>
    )
  }
}
