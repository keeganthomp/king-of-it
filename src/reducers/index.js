import _ from "lodash";

const initialState = {
  dailyChallenge: "Eat a Dick",
  hasErrored: "No Errors ☺"
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    default:
      return state;
  }
};


export default reducer;
