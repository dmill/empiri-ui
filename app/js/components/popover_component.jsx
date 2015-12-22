import React, { Component } from 'react'

const PopoverContents = ({direction, items}) => {
  return (
    <div className={`popover-component props-caret-${direction}`}>
      {items.map((item, i) => <div key={i}>{item}</div>)}
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
      <span className="popover-select-component" onClick={this.handleClick.bind(this)}>
        {this.props.content}
        {this.renderPopover()}
      </span>
    )
  }
}
