import _ from "lodash";
import {
  UPDATE_IMAGES,
  INITIAL_IMAGES,
  GET_ERRORS,
  GET_CURRENT_USER
} from "../actions";

const initialState = {
  dailyChallenge: "The Daily Challenge",
  user: {},
  images: [],
  hasErrored: undefined
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case INITIAL_IMAGES:
      console.log("REDUCING INITAL");
      console.log(action.payload);
      newState.images = action.payload;
      return newState;
    case UPDATE_IMAGES:
      newState.images.push(action.payload);
      return newState;
    case GET_CURRENT_USER:
      console.log("ACTION PAYLOAD", action.payload);
      newState.user = action.payload;
      console.log("NEWSTATEEE:", newState);
      return newState;
    case GET_ERRORS:
      newState.hasErrored = action.payload;
      return newState;
    default:
      return state;
  }
};

export default reducer;
