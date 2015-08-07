var React = require("react");
var ExperimentsComponent = require("./components/experiments_component.jsx");


React.render(
  <ExperimentsComponent experiments={[{title: "hi1"}, {title: "hi2"}]} />,
  document.getElementById("root")
);

// React.render(
//   <ExperimentComponent data={{title: "hi1"}} />,
//   document.getElementById("root")
// );
