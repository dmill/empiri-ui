import React from "react";
import ExperimentComponent from "./components/experiment_component"


React.render(
  <ExperimentComponent data={{title: "hello"}} />,
  document.getElementById("root")
)
