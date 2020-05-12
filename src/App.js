import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";

const App = (props) => {
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

//mapStateToProps tell to connect which
//pieces of our state we want to bring in to this component.
//This function takes in state as a parameter, then returns an object where the properties can be passed to props, and the values are retrieved from the store for our component.

const mapStateToProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    features: state.features,
    additionalFeatures: state.additionalFeatures,
  };
};

export default connect(mapStateToProps, {})(App);
