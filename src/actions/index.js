export const UPDATE_IMAGES = "UPDATE_IMAGES";
export const GET_ERRORS = "GET_ERRORS";
export const INITIAL_IMAGES = "INITIAL_IMAGES";

export let updateImages = image => {
  return {
    type: UPDATE_IMAGES,
    payload: image
  };
};

let initialImages = images => {
  return {
    type: INITIAL_IMAGES,
    payload: images
  };
};

let getErrors = err => {
  return {
    type: GET_ERRORS,
    payload: err
  };
};

export let getInitialImages = images => {
  return dispatch => {
    fetch(
      `https://139167162543316:MPfnC3smU0G-vHs-GC2YBZHz0Ww@api.cloudinary.com/v1_1/keezee/resources/image`, {mode: 'no-cors'}
    )
      .then(response => {
      console.log("response ", response);
        return response.json();
      })
      .then(images => {
      console.log("images ", images);
        dispatch(initialImages(images));
      })
      .catch(err => dispatch(getErrors(err)));
      console.log("ERRRORRRR")
  };
};
