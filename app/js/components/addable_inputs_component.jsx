import React, { Component } from 'react'
import IconElement from '../elements/icon_element'

const RemovableInput = ({ value, onClick, onChange }) => {
  return (
    <div className="addable-author-element">
      <label className="first-name">
        First Name
        <input type="text" name="first_name" value={value.first_name} onChange={onChange} />
      </label>
      <label className="last-name">
        Last Name
        <input type="text" name="last_name" value={value.last_name} onChange={onChange} />
      </label>
      <label className="title">
        Title
        <input type="text" name="title" value={value.title} onChange={onChange} />
      </label>
      <label className="email">
        email
        <input type="text" name="email" value={value.email} onChange={onChange} />
      </label>
    </div>
  )
}

export default class AddableInputsComponent extends Component {
  componentWillMount() {
    this.state = { items: [Object.assign({}, this.props.defaultItem)] }
  }

  addItem() {
    let items = this.state.items
    items = items.concat([Object.assign({}, this.props.defaultItem)])
    this.setState({ items })
  }

  updateItem(e) {
    let items = [].concat(this.state.items)
    items[items.length - 1][e.target.name] = e.target.value
    this.setState({ items })
  }

  deleteItem(e) {
    const items = this.state.items.filter((item) => item !== e.target.previousElementSibling.value)
    this.setState({ items })
  }

  renderItems() {
    const savedItems = this.state.items.slice(0, -1)
    const lastItem = this.state.items[this.state.items.length - 1]
    return (
      <div>
        {savedItems.map((item, i) => <div key={i} onClick={this.deleteItem.bind(this)}>{item.first_name} {item.last_name}, {item.title} {item.email}</div>)}
        <RemovableInput value={lastItem} onChange={this.updateItem.bind(this)} />
      </div>
    )
  }

  render() {
    return (
      <div className="addable-author-component">
        {this.renderItems()}
        <IconElement onClick={this.addItem.bind(this)} iconType="fontawesome" iconName="plus-circle" />
      </div>
    )
  }
}
