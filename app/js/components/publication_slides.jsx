import React, { Component } from 'react'
import store from '../redux/store'
import AddableAuthorComponent from '../components/addable_author_component'
import PublicationSectionsComponent from '../components/publication_sections_component'
import { updatePublication, deleteAuthor } from '../redux/actions'
import IconElement from '../elements/icon_element'
import { Link } from 'react-router'
import ajax from '../lib/ajax'
import { browserHistory } from 'react-router'

export class Slide0 extends Component {
  componentWillReceiveProps(nextProps) {
    nextProps.changeSlides()
  }

  render() {
    return (
      <div className="new-publication-intro">
        <h1>Welcome to Empiri&#39;s Open Science Publishing System</h1>
        <h2>Contribute to the reformation of science</h2>
        <div className="benefits-container">
          <h2>How our process works:</h2>
          <ol>
            <li>Write your paper using the system here</li>
            <li>As soon as you press &#39;publish&#39; your work becomes publicly available</li>
            <li>Once published, your work accumulates peer reviews over time</li>
            <li>There is no limit to the number of reviews your paper can receive</li>
            <li>Reviews are aggregated over time to reveal the community&#39;s consensus on your paper</li>
            <li>Your paper remains revisable indefinitely for you to add new content as your research continues</li>
          </ol>
        </div>
        <h2>Together we can bring an end to the old way of publishing, and discover a new paradigm that is <em>Transparent</em>, <em>Merit-Based</em>, and truly <em>Empirical</em></h2>
      </div>
    )
  }
}

export class Slide1 extends Component {
  componentWillMount() {
    this.state = { title: store.getState().publication.get('title'), error: null }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState({ title: store.getState().publication.get('title') }))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.bypass && !this.state.title) {
      nextProps.changeSlides()
    } else {
      this.saveSlide(nextProps.changeSlides)
    }
  }

  saveSlide(callback) {
    const publicationId = store.getState().publication.get('id')
    if (publicationId) {
      ajax.request({
        type: 'PATCH',
        url: `${ajax.getDomain()}/publications/${publicationId}`,
        data: JSON.stringify({ publication: { title: this.state.title }}),
        contentType: 'application/json',
        success: ({ publication }) => {
          store.dispatch(updatePublication({ title: this.state.title }))
          callback()
        },
        error: (error) => this.setState({ error: true })
      })
    } else {
      ajax.request({
        type: 'POST',
        url: `${ajax.getDomain()}/publications/`,
        data: JSON.stringify({ publication: { title: this.state.title }}),
        contentType: 'application/json',
        success: ({ publication }) => {
          store.dispatch(updatePublication({ id: publication.id, title: this.state.title }))
          callback()
        },
        error: (error) => this.setState({ error: true })
      })
    }
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onChange(e) {
    this.setState({ title: e.target.value })
  }

  renderErrorMessage() {
    if (this.state.error) {
      return <div className="error-message">Please enter a title</div>
    }
  }

  render() {
    return (
      <div className="slide component">
        <h1>Welcome to your new publication!</h1>
        <h3>What will you call it?</h3>
        <label>
          Publication Title
          <input type="text" name="title" value={this.state.title} onChange={this.onChange.bind(this)} />
          {this.renderErrorMessage.bind(this)()}
        </label>
      </div>
    )
  }
}

export class Slide2 extends Component {
  componentWillMount() {
    this.state = { abstract: store.getState().publication.get('abstract'), error: false }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState({ abstract: store.getState().publication.get('abstract' ) }))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.changeSlides) {
      this.saveSlide(nextProps.changeSlides)
    }
  }

  saveSlide(callback) {
    const publicationId = store.getState().publication.get('id')
    ajax.request({
      type: 'PATCH',
      url: `${ajax.getDomain()}/publications/${publicationId}`,
      data: JSON.stringify({ publication: { abstract: this.state.abstract }}),
      contentType: 'application/json',
      success: ({ publication }) => {
        callback()
        store.dispatch(updatePublication({ abstract: publication.abstract }))
      },
      error: (error) => this.setState({ error: true })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onChange(e) {
    this.setState({ abstract: e.target.value })
  }

  renderErrorMessage() {
    if (this.state.error) {
      return <div className="error-message">Please enter a valid abstract</div>
    }
  }

  render() {
    return (
      <div className="slide component">
        <h2>What is your paper about?</h2>
        <label>
          Abstract
          <textarea type="text" name="abstract" value={this.state.abstract} onChange={this.onChange.bind(this)} />
          {this.renderErrorMessage.bind(this)()}
        </label>
      </div>
    )
  }
}

export class Slide3 extends Component {
  componentWillMount() {
    this.state = { authors: store.getState().publication.getIn(['_embedded', 'authors']), error: false }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState({ authors: store.getState().publication.getIn(['_embedded', 'authors']) }))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.changeSlides) {
      nextProps.changeSlides()
    }
  }

  renderErrorMessage() {
    if (this.state.error) {
      return <div className="error-message">Please enter a valid information</div>
    }
  }

  onError() {
    this.setState({ error: true })
  }

  onSuccess() {
    this.setState({ error: false })
  }

  render() {
    const currentUser = store.getState().currentUser
    return (
      <div className="slide component">
        <h2>Who helped you?</h2>
        <label>
          First Author:
          <h6>{currentUser.first_name} {currentUser.last_name}</h6>
        </label>
        <label>
          Contributing Authors
          {this.state.authors.map((author) => <SavedAuthor author={author} key={author.get('id')} onError={this.onError.bind(this)} />)}
          <AddableAuthorComponent onError={this.onError.bind(this)} onSuccess={this.onSuccess.bind(this)} />
          {this.renderErrorMessage.bind(this)()}
        </label>
      </div>
    )
  }
}

class SavedAuthor extends Component {
  deleteAuthor() {
    const publicationId = store.getState().publication.get('id')
    const authorId = this.props.author.get('id')
    ajax.request({
      type: 'DELETE',
      url: `${ajax.getDomain()}/publications/${publicationId}/authors/${authorId}`,
      contentType: 'application/json',
      success: () => store.dispatch(deleteAuthor(authorId)),
      error: () => this.props.onError()
    })
  }

  render() {
    return(
      <div>
        {this.props.author.get('first_name')} {this.props.author.get('last_name')}, {this.props.author.get('title')} {this.props.author.get('email')}
        <IconElement iconType="fontawesome" iconName="close" onClick={this.deleteAuthor.bind(this)} />
      </div>
    )
  }
}

export class Slide5 extends Component {
  componentWillReceiveProps(nextProps) {
    nextProps.changeSlides()
  }

  saveUnpublished() {
    const publicationId = store.getState().publication.get('id')
    ajax.request({
      type: 'PATCH',
      url: `${ajax.getDomain()}/publications/${publicationId}`,
      data: JSON.stringify({ publication: { published: false } }),
      contentType: 'application/json',
      success: ({ publication }) => {
        store.dispatch(updatePublication(publication))
        browserHistory.push(`/publications/${publicationId}`)
      },
      error: (error) => console.error(error)
    })
  }

  publishPublication() {
    const publicationId = store.getState().publication.get('id')
    ajax.request({
      type: 'PATCH',
      url: `${ajax.getDomain()}/publications/${publicationId}`,
      data: JSON.stringify({ publication: { published: true } }),
      contentType: 'application/json',
      success: () => {
        store.dispatch(updatePublication({ published: true }))
        browserHistory.push(`/publications/${publicationId}`)
      },
      error: (error) => console.error(error)
    })
  }

  render() {
    return (
      <div className="slide component">
        <h2>Almost Finished!</h2>
        <button onClick={this.saveUnpublished.bind(this)}>Save As Draft</button>
        <button onClick={this.publishPublication.bind(this)}>Publish Now!</button>
      </div>
    )
  }
}
