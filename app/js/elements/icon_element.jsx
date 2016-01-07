import React, { Component } from 'react'

const IconElement = ({ iconName, iconType, onClick }) => {
  switch(iconType) {
    case 'fontawesome':
      return <i onClick={onClick} className={"fa fa-" + iconName}></i>
    case 'material':
      return <i onClick={onClick} className="material-icons">{iconName}</i>
    default:
      return console.error('IconElement: Please specify a correct iconType.')
  }
}

export default IconElement
