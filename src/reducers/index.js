import _ from "lodash";
import { UPDATE_IMAGES, INITIAL_IMAGES, GET_ERRORS } from "../actions";

const initialState = {
  dailyChallenge: "Eat a Dick",
  images: [],
  hasErrored: "No Errors ☺"
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case INITIAL_IMAGES:
      console.log("REDUCING INITAL");
      newState.images = action.payload;
      return newState;
    case UPDATE_IMAGES:
      newState.images.push(action.payload);
      return newState;
    case GET_ERRORS:
      newState.hasErrored = action.payload;
      return newState;
    default:
      return state;
  }
};

export default reducer;
