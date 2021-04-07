const initialState = {
  clickedRoom: null,
  clickCount: 0
};

const setClickedRoom = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CLICKED_ROOM":
      return { ...state, clickedRoom: action.payload, clickCount: state.clickCount + 1 };
    default:
      return state;
  }
};

export default setClickedRoom;
