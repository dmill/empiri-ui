import React, { Component } from 'react'
import store from '../redux/store'
import { Link } from 'react-router'
import IconElement from '../elements/icon_element'

const PublicationPreview = ({ title, abstract, name, picture }) => {
  return (
    <Link to="/hypothesis" className="publication-preview-element">
      <h2>{title}</h2>
      <h3>Abstract:</h3>
      <p>{abstract}</p>
      <div className="publication-preview-element-footer">
        <img src={picture} />
        <div>{name} & 23 others</div>
      </div>
    </Link>
  )
}

export default class BrowseView extends Component {
  componentWillMount() {
    this.state = { hypotheses: [] }
    $.get('http://localhost:4000/hypotheses').done(({ data }) => {
      this.setState({ hypotheses: data })
    })
  }

  render() {
    const user = store.getState().currentUser
    const data = {
      category: "Bioinformatics",
      title: "TIPR: transcription initiation pattern recognition on a genome scale",
      abstract: "The computational identification of gene transcription start sites (TSSs) can provide insights into the regulation and function of genes without performing expensive experiments, particularly in organisms with incomplete annotations. High-resolution general-purpose TSS prediction remains a challenging problem, with little recent progress on the identification and differentiation of TSSs which are arranged in different spatial patterns along the chromosome."
    }
    return (
      <div id="browse-view" className="container">
        <div className="row">
          <div className="eight columns publications-column">
            <h1>Trending Topics</h1>
            {this.state.hypotheses.map((hypothesis, i) => <PublicationPreview title={hypothesis.title} abstract={hypothesis.synopsis} key={i} />)}
          </div>

          <div className="four columns publications-feed">
            <h1>Publication Updates</h1>
            <div className="feed-menu clear-fix">
              <Link to="/publications/new" className="menu-item">
                <IconElement iconType="material" iconName="note_add" />
                New Publication
              </Link>
              <div className="menu-item">Influence: 0</div>
            </div>
            <div className="notifications">You dont have any notifications.</div>
          </div>
        </div>
      </div>
    )
  }
}
