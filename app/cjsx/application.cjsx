React = require("react")
PublicationStore = require("./stores/publication_store.coffee")
PublicationComponent = require("./components/publication_component.coffee")


React.render(
  <PublicationComponent data={PublicationStore.getAll()} />,
  document.getElementById("root")
)
