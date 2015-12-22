import React, { Component } from 'react'

const IconElement = ({ iconName, iconType }) => {
  switch(iconType) {
    case 'fontawesome':
      return <i className={"fa fa-" + iconName}></i>
    case 'material':
      return <i className="material-icons">{iconName}</i>
    default:
      return console.error('IconElement: Please specify a correct iconType.')
  }
}

export default IconElement
