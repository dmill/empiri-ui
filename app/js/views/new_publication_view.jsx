import React, { Component } from 'react'
import SlideshowComponent from '../components/slideshow_component'
import store from '../redux/store'
import AddableAuthorComponent from '../components/addable_author_component'
import PublicationSectionsComponent from '../components/publication_sections_component'
import { updatePublication, deleteAuthor, newPublication } from '../redux/actions'
import IconElement from '../elements/icon_element'

export default class NewPublicationView extends Component {
  componentDidMount() {
    store.dispatch(newPublication())
  }

  render() {
    return (
      <SlideshowComponent slides={[
        <Slide0 key={0} />,
        <Slide1 key={1} />,
        <Slide2 key={2} />,
        <Slide3 key={3} />,
        <Slide4 key={4} />,
        <Slide5 history={this.props.history} key={5} />
      ]} />
    )
  }
}

class Slide0 extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Empiri&rsquo;s Publishing System</h1>
        <h3>Here you can publish your work safely</h3>
        <p>More instructions on how it works and its benefits</p>
      </div>
    )
  }
}

class Slide1 extends Component {
  componentWillMount() {
    this.state = { title: store.getState().publication.get('title') }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState({ title: store.getState().publication.get('title') }))
  }

  componentWillUnmount() {
    this.unsubscribe()
    const publicationId = store.getState().publication.get('id')
    if (publicationId) {
      $.ajax({
        type: 'PATCH',
        url: `http://localhost:4000/publications/${publicationId}`,
        data: JSON.stringify({ publication: { title: this.state.title }}),
        contentType: 'application/json'
      }).done(({ publication }) => store.dispatch(updatePublication({ id: publication.id, title: this.state.title })))
    } else {
      $.ajax({
        type: 'POST',
        url: 'http://localhost:4000/publications/',
        data: JSON.stringify({ publication: { title: this.state.title }}),
        contentType: 'application/json'
      }).done(({ publication }) => store.dispatch(updatePublication({ id: publication.id, title: this.state.title })))
    }
  }

  onChange(e) {
    this.setState({ title: e.target.value })
  }

  render() {
    return (
      <div className="slide component">
        <h1>Welcome to your new publication!</h1>
        <h3>What will you call it?</h3>
        <label>
          Publication Title
          <input type="text" name="title" value={this.state.title} onChange={this.onChange.bind(this)} />
        </label>
      </div>
    )
  }
}

class Slide2 extends Component {
  componentWillMount() {
    this.state = { abstract: store.getState().publication.get('abstract') }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState({ abstract: store.getState().publication.get('abstract' ) }))
  }

  componentWillUnmount() {
    this.unsubscribe()
    const publication = store.getState().publication
    $.ajax({
      type: 'PATCH',
      url: `http://localhost:4000/publications/${publication.get('id')}`,
      data: JSON.stringify({ publication: { abstract: this.state.abstract }}),
      contentType: 'application/json'
    }).done(({ publication }) => store.dispatch(updatePublication({ abstract: publication.abstract })))
  }

  onChange(e) {
    this.setState({ abstract: e.target.value })
  }

  render() {
    return (
      <div className="slide component">
        <h2>What is your paper about?</h2>
        <label>
          Abstract
          <textarea type="text" name="abstract" value={this.state.abstract} onChange={this.onChange.bind(this)} />
        </label>
      </div>
    )
  }
}

class Slide3 extends Component {
  componentWillMount() {
    this.state = { authors: store.getState().publication.getIn(['_embedded', 'authors']) }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState({ authors: store.getState().publication.getIn(['_embedded', 'authors']) }))
  }

  componentWillUnmount() {
    this.unsubscribe()
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
          {this.state.authors.map((author, i) => <SavedAuthor author={author} index={i} key={i} />)}
          <AddableAuthorComponent />
        </label>
      </div>
    )
  }
}

class SavedAuthor extends Component {
  deleteAuthor() {
    store.dispatch(deleteAuthor(this.props.index))
  }

  render() {
    return(
      <div>
        {this.props.author.first_name} {this.props.author.last_name}, {this.props.author.title} {this.props.author.email}
        <IconElement iconType="fontawesome" iconName="close" onClick={this.deleteAuthor.bind(this)} />
      </div>
    )
  }
}

const Slide4 = () => <PublicationSectionsComponent sections={[].concat(store.getState().publicationInProgress._embedded.sections)} />

class Slide5 extends Component {
  publishPublication() {
    const publicationId = store.getState().publicationInProgress.id
    $.ajax({
      type: 'PATCH',
      url: `http://localhost:4000/publications/${publicationId}`,
      data: JSON.stringify({ publication: { published: true } }),
      contentType: 'application/json',
    }).done(() => {
      store.dispatch(updatePublication({ published: true }))
      this.props.history.push(`/publications/${publicationId}`)
    })
  }

  render() {
    return (
      <div className="slide component">
        <h2>Almost Finished!</h2>
        <button>Save For Later</button>
        <button onClick={this.publishPublication.bind(this)}>Publish Now!</button>
      </div>
    )
  }
}

function updateStore(name, value) {
  const payload = { [name]: value }
  store.dispatch(updatePublication(payload))
}

function publishPublication() {
  store.dispatch(updatePublication({ published: true }))
}
