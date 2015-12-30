import React, { Component } from 'react'

const AvatarRowComponent = ({ avatars }) => {
  return (
    <div className="avatar-row-component">
      {avatars.map((avatar, i) => avatar)}
    </div>
  )
}

export default AvatarRowComponent
