React = require("react")


module.exports = ->
  <div id="experiment-component">
    <section className="introduction">
      <h1>{@props.data.title}</h1>

      <h2>{@props.data.date}</h2>
      <p>{@props.data.synopsis}</p>
    </section>

    <section className="content">
      <div className="results-container">
        <h1>Results</h1>
        <p>{@props.data.results[0].text}</p>
      </div>

      <h2>Discussion</h2>
      <p>{@props.data.discussion}</p>
    </section>
  </div>
