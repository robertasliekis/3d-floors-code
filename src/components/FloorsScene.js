import React, { useRef, Suspense } from "react";
import "../css/floorSceneStyles.css";
import { connect } from "react-redux";
import { setClickedFloor, setClickedRoom } from "../actions";
import { Canvas, useFrame, useThree, extend } from "react-three-fiber";
import { softShadows } from "drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import FloorsModel from "./FloorsModel";

extend({ OrbitControls });
softShadows();

const CameraControls = ({ windowWidth }) => {
  const {
    camera,
    gl: { domElement }
  } = useThree();
  const controls = useRef();
  useFrame((state) => controls.current.update());
  let minDistance = 150;
  let maxDistance = 350;
  if (windowWidth < 450) {
    minDistance = 350;
    maxDistance = 650;
  }
  return <orbitControls ref={controls} args={[camera, domElement]} minDistance={minDistance} maxDistance={maxDistance} />;
};

function FloorsScene({ windowWidth, clickedFloor, clickedRoom, setClickedFloor, setClickedRoom }) {
  const clickedFloorChange = (index) => {
    setClickedFloor(index);
  };

  const clickedRoomChange = (index) => {
    setClickedRoom(index);
  };

  const setCameraPosition = () => {
    if (windowWidth > 450) {
      return [160, 120, -140];
    } else {
      return [500, 180, -140];
    }
  };

  return (
    <div className="floor-scene-container">
      <Canvas colorManagement shadowMap camera={{ position: setCameraPosition(), fov: 30 }}>
        <CameraControls windowWidth={windowWidth} />
        <ambientLight intensity={0.6} />
        <pointLight position={[-10, 100, -20]} intensity={0.5} />
        <group>
          <Suspense fallback={null}>
            <FloorsModel
              onClickedFloorChange={clickedFloorChange}
              onClickedRoomChange={clickedRoomChange}
              clickedFloor={clickedFloor}
              clickedRoom={clickedRoom}
              windowWidth={windowWidth}
            />
          </Suspense>
        </group>
      </Canvas>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    clickedFloor: state.setClickedFloor.clickedFloor,
    clickedRoom: state.setClickedRoom.clickedRoom,
    windowWidth: state.setWindowWidth.windowWidth
  };
};

const mapDispatchToProps = {
  setClickedFloor,
  setClickedRoom
};

export default connect(mapStateToProps, mapDispatchToProps)(FloorsScene);
