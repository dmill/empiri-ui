import React, { Component } from 'react'
import IconElement from './icon_element'
import ContributionExpandedElement from './contribution_expanded_element'
import store from '../redux/store'
import { expandContribution } from '../redux/actions'

export default class ContributionListElement extends Component {
  componentWillMount() {
    this.state = { contributionId: store.getState().currentHypothesis.contributionId }
    this.unsubscribe = store.subscribe(() => {
      this.setState({ contributionId: store.getState().currentHypothesis.contributionId })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  handleClick() {
    store.dispatch(expandContribution(this.props.id))
  }

  renderExpanded() {
    if(this.isExpanded()) {
      return <ContributionExpandedElement />
    }
  }

  isDimmed() {
    const expandedContributionId = store.getState().currentHypothesis.contributionId
    if(expandedContributionId && expandedContributionId != this.props.id) {
      return true
    } else {
      return false
     }
  }

  isExpanded() {
    if(store.getState().currentHypothesis.contributionId == this.props.id) {
      return true
    } else {
      return false
    }
  }

  renderClassNames() {
    let additionalClasses = ""
    if(this.isExpanded()) {
      additionalClasses += " expanded"
    }
    if(this.isDimmed()) {
      additionalClasses += " dimmed"
    }
    return additionalClasses
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
      <div onClick={this.handleClick.bind(this)} className={"contribution-list-element" + this.renderClassNames()}>
        {this.renderIcon()}
        <span>{this.props.title}</span>
        {this.renderExpanded()}
      </div>
    )
  }
}
