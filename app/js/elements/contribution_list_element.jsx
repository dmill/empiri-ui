import React, { Component } from 'react'
import IconElement from './icon_element'
import ContributionExpandedElement from './contribution_expanded_element'

class ContributionListElement extends Component {
  componentWillMount() {
    this.state = { expanded: false }
  }

  handleClick() {
    this.setState({ expanded: !this.state.expanded })
  }

  renderExpanded() {
    if(this.state.expanded) {
      return <ContributionExpandedElement />
    }
  }

  renderIcon() {
    switch(this.props.type) {
      case 'paper':
        return <IconElement iconType="material" iconName="description" />
        break
      case 'commentary':
        return <IconElement iconType="material" iconName="assessment" />
        break
      default:
        console.error('ContributionListElement: please supply a valid type.')
    }
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)} className="contribution-list-element">
        {this.renderIcon()}
        <span>{this.props.title}</span>
        {this.renderExpanded()}
      </div>
    )
  }
}

export default ContributionListElement
