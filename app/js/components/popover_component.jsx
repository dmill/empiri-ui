import React, { Component } from 'react'
import { Link } from 'react-router'

const PopoverContents = ({direction, items}) => {
  return (
    <div className={`popover popover-${direction}`}>
      {items.map((item, i) => item)}
    </div>
  )
}

export default class PopoverComponent extends Component {
  componentWillMount() {
    this.state = { open: false }
  }

  handleClick() {
    this.setState({ open: !this.state.open })
  }

  renderPopover() {
    if(this.state.open) {
      return <PopoverContents direction={this.props.direction} items={this.props.items} />
    }
  }

  render () {
    return (
      <span className="popover-component" onClick={this.handleClick.bind(this)}>
        {this.props.select}
        {this.renderPopover()}
      </span>
    )
  }
}
