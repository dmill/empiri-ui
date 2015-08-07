var React = require("react");
var ExperimentDispatcher = require("../dispatchers/experiment_dispatcher");
var ExperimentComponent = require("./experiment_component.jsx");

class ExperimentsComponent extends React.Component {

  render () {
    return (
      <div className="experiments-component">
        {this.props.experiments.map(
          function(experiment, i) {
            debugger
           return <ExperimentComponent data={experiment} key={i} />
          }
        )}
      </div>
    );
  }

  getInitialState () {
    return {activeId: null};
  }

  componentDidMount () {
    ExperimentDispatcher.register(this.dispatchCallBack);
  }

}


module.exports = ExperimentsComponent;
