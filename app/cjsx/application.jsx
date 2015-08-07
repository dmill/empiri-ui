var React = require("react");
var PublicationComponent = require("./components/publication_component.jsx");


React.render(
  <PublicationComponent data={{title: "yo"}} />,
  document.getElementById("root")
);

// React.render(
//   <ExperimentComponent data={{title: "hi1"}} />,
//   document.getElementById("root")
// );
