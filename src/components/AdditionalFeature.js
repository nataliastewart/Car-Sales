import React from "react";
// import { addFeatures } from "../actions/actions";
// import { connect } from "react-redux";

const AdditionalFeature = (props) => {
  console.log("AdditionalFeature-PROPS:", props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addItem(props.feature)} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     additionalPrice: state.additionalPrice,
//     car: state.car,
//     features: state.features,
//     additionalFeatures: state.additionalFeatures,
//     addFeatures,
//   };
// };

export default AdditionalFeature;
