import { store } from "../store";

export const UPDATE_IMAGES = "UPDATE_IMAGES";
export const GET_ERRORS = "GET_ERRORS";
export const INITIAL_IMAGES = "INITIAL_IMAGES";

export const updateImages = image => {
  store.dispatch({
    type: UPDATE_IMAGES,
    payload: image
  });
};

export const initialImages = images => {
  console.log("initialImages ACTIONNNN");
  store.dispatch({
    type: INITIAL_IMAGES,
    payload: images
  });
};

export const getErrors = err => {
  store.dispatch({
    type: GET_ERRORS,
    payload: err
  });
};
