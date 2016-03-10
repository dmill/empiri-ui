import React, { Component } from 'react'
import PeerReviewComponent from './peer_review_component'
import PublicationView from '../views/publication_view'
import store from '../redux/store'

export default class TabsComponent extends Component {
  constructor(props) {
    super(props)
    this.tabs = [
      { name: 'Your Review',
        body: <PeerReviewComponent
                history={this.props.history}
                existingReview={this.props.existingReview}
                routeParams={this.props.routeParams}
              />
      },
      {
        name: 'The Publication',
        body: <PublicationView routeParams={this.props.routeParams} />
      }
    ]
  }

  componentWillMount() {
    this.state = { activeTab: 0 }
  }

  handleClick(e) {
    this.setState({ activeTab: e.target.id })
  }

  getClassName(i) {
    let className = ''
    if (this.state.activeTab == i) {
      className += ' active'
    }
    return className
  }

  render () {
    return (
      <div className="tabs-component">
        <div className="tabs">
          {this.tabs.map((tab, i) => {
            return <span className={`tab ${this.getClassName(i)}`} onClick={this.handleClick.bind(this)} key={i} id={i}>{tab.name}</span>
          })}
        </div>
        <div className="pane">
          <div>{this.tabs.map((tab, i) => {
            return (<div key={i} className={`pane-content ${this.getClassName(i)}`}>
              {tab.body}
            </div>)
          })}
          </div>
        </div>
      </div>
    )
  }
}
