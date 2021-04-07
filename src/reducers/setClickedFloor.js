const initialState = {
  clickedFloor: null
};

const setClickedFloor = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CLICKED_FLOOR":
      return { ...state, clickedFloor: action.payload };
    default:
      return state;
  }
};

export default setClickedFloor;
