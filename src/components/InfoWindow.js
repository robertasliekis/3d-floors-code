import React, { useEffect, useState } from "react";
import "../css/infoWindowStyles.css";

import { connect } from "react-redux";
import { setClickedFloor, setClickedRoom } from "../actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import floorsData from "../data/floorsData";

function InfoWindow({ clickedFloor, clickedRoom, setClickedFloor, setClickedRoom }) {
  const [floorText, setFloorText] = useState("");
  const [roomText, setRoomText] = useState({ name: "", description: "" });

  useEffect(() => {
    if (clickedFloor !== null) {
      setFloorText(floorsData[clickedFloor].description);
    }
    if (clickedRoom !== null) {
      setRoomText(floorsData[clickedFloor].rooms[clickedRoom]);
    }
  }, [clickedFloor, clickedRoom]);

  return (
    <div className="info-window">
      <div
        className="floor-container container"
        style={{ transform: clickedFloor !== null ? "translate(-100%, 0)" : "translate(0, 0)", opacity: clickedFloor !== null ? 1 : 0 }}
      >
        <div className="text-container">
          <h1>{`Floor ${clickedFloor + 1}:`}</h1>
          <h1>{`${floorText}`}</h1>
        </div>
        <div
          className="btn btn-close"
          onClick={() => {
            setClickedFloor(null);
            setClickedRoom(null);
          }}
        >
          <FontAwesomeIcon icon={faTimes} className="icon" />
        </div>
      </div>
      <div
        className="room-container container"
        style={{ transform: clickedRoom !== null ? "translate(-100%, 0)" : "translate(0, 0)", opacity: clickedRoom !== null ? 1 : 0 }}
      >
        <div className="text-container">
          <h1>{roomText.name}</h1>
          <p>{roomText.description}</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    clickedFloor: state.setClickedFloor.clickedFloor,
    clickedRoom: state.setClickedRoom.clickedRoom
  };
};

const mapDispatchToProps = {
  setClickedFloor,
  setClickedRoom
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoWindow);
