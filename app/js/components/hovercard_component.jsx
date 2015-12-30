import React, { Component } from 'react'

export default class HoverCardComponent extends Component {
  componentWillMount() {
    this.state = { open: false }
  }

  handleMouseOver() {
    this.setState({ open: !this.state.open })
  }

  handleMouseOut() {
    this.setState({ open: !this.state.open })
  }

  renderCard() {
    if(this.state.open && this.props.content) {
      return <span className="hovercard-component-card">{this.props.content}</span>
    }
  }

  render() {
    return (
      <span className="hovercard-component"
        onMouseOut={this.handleMouseOut.bind(this)}
        onMouseOver={this.handleMouseOver.bind(this)}
      >
        {this.props.select}
        <div className="hovercard-component-card-container">{this.renderCard()}</div>
      </span>
    )
  }
}
