import React, { Component } from 'react'

const ButtonElement = ({ buttonName, buttonText, onClick }) => {
  return <button onClick={onClick} className={buttonName}>
          {buttonText}
         </button>
}

export default ButtonElement
