import { combineReducers } from "redux";
import _ from "lodash";

const initialState = {

  hasErrored: "No Errors ☺"

};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  titles: reducer
});

export default rootReducer;
