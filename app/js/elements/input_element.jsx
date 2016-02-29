import React, { Component } from 'react'

export default class InputElement extends Component {
  componentWillMount() {
    if (this.props.value) {
      this.state = { value: this.props.value }
    } else {
      this.state = { value: '' }
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    return <input type={this.props.type} onChange={this.handleChange.bind(this)} value={this.state.value} />
  }
}
