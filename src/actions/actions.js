//Action types to avoid errors with typo error
export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

//An action creator is a function that creates an action. Or in other words, an action creator is a function that returns an action object.
//Action creators are a middle step between events/interactions and the dispatch process. They make it possible to write reusable functions that can create actions on the fly, rather than us hard coding actions into our components.

export function addFeatures(item) {
  return {
    type: ADD_FEATURE,
    payload: item,
  };
}

export function removeFeatures(item) {
  return {
    type: REMOVE_FEATURE,
    payload: item,
  };
}
