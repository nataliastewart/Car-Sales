import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { addFeatures, removeFeatures } from "./actions/appActions";

import { connect } from "react-redux";

export const App = (props) => {
  const removeFeature = (item) => {
    // dispatch an action here to remove an item
    props.removeFeatures(item);
  };

  const buyItem = (item) => {
    props.addFeatures(item);
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeFeature={removeFeature} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures
          buyItem={buyItem}
          additionalFeatures={props.additionalFeatures}
          addFeatures={props.addFeatures}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
  };
};

// export default App;
export default connect(mapStateToProps, { addFeatures, removeFeatures })(App);
