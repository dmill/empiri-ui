import React, { Component } from 'react'

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
      <span style={{ zIndex: 1 }} className="popover-component" onClick={this.handleClick.bind(this)}>
        {this.props.select}
        {this.renderPopover()}
      </span>
    )
  }
}
