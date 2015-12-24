import React from 'react'
import HoverCardComponent from '../components/hovercard_component'
import { Link } from 'react-router'

const AvatarComponent = ({ id, name, imgSrc }) => {
  return (
    <HoverCardComponent
      select={
        <Link className="avatar-component" to="/user">
          <img src={imgSrc} />
        </Link>
      }
      content={name} />
  )
}

export default AvatarComponent
