import React from "react";
import PublicationComponent from "./components/publication_component.jsx";
import PublicationStore from "./stores/publication_store.js";

React.render(
  <PublicationComponent data={PublicationStore.getAll()} />,
  document.getElementById("root")
);
