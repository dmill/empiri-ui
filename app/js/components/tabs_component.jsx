import React, { Component } from 'react'

export default class TabsComponent extends Component {
  componentWillMount() {
    this.state = { activeTab: 0 }
  }

  handleClick(e) {
    this.setState({ activeTab: e.target.id })
  }

  getClassName(i) {
    let className = 'tab'
    if (this.state.activeTab == i) {
      className += ' active'
    }
    return className
  }

  render () {
    return (
      <div className="tabs-component">
        <div className="tabs">
          {this.props.tabs.map((tab, i) => {
            return <span className={this.getClassName(i)} onClick={this.handleClick.bind(this)} key={i} id={i}>{tab.name}</span>
          })}
        </div>
        <div className="pane">
          <div>{this.props.tabs[this.state.activeTab].body}</div>
        </div>
      </div>
    )
  }
}
