import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";

import LoadFloorModel from "../functions/LoadFloorModel";

const FloorsModel = ({ windowWidth, clickedFloor, clickedRoom, onClickedFloorChange, onClickedRoomChange }) => {
  const [floorBaseMesh, floorSideMesh, floorsRoomsMeshes] = LoadFloorModel();

  const buildingRef = useRef();
  const floorRefs = useRef([]);
  const materialRefs = useRef([]);
  const roomRefs = useRef([[], [], [], [], []]);
  const sideRefs = useRef([]);
  const floorDistance = 10;

  useFrame(() => {
    const setMeshOpacity = (opacity, index) => {
      materialRefs.current[index].opacity = opacity;
      sideRefs.current[index].opacity = opacity;
      roomRefs.current[index].forEach((roomRef) => {
        roomRef.opacity = opacity;
      });
    };

    const setMeshPosition = (meshRef, floorIndex, indexDifference) => {
      let floorGap = 0;
      if (indexDifference !== undefined) {
        floorGap = indexDifference * 30;
      }
      let floorPosition = floorIndex * floorDistance - floorGap;

      if (meshRef.position.y > floorPosition) {
        if (indexDifference > 0 || indexDifference === undefined) {
          meshRef.position.y -= animationSpeed;
        }
      } else if (meshRef.position.y < floorPosition) {
        if (indexDifference < 0 || indexDifference === undefined) {
          meshRef.position.y += animationSpeed;
        }
      }
    };

    const animationSpeed = 2;
    buildingRef.current.rotation.y += 0.001;
    floorRefs.current.forEach((ref, index) => {
      let meshOpacity = 1;
      if (clickedFloor !== null) {
        let indexDifference = clickedFloor - index;
        meshOpacity = 0.2;
        if (clickedFloor !== index) {
          setMeshOpacity(meshOpacity, index);
        }
        setMeshPosition(ref, index, indexDifference);
      } else {
        setMeshOpacity(meshOpacity, index);
        setMeshPosition(ref, index);
      }
    });
  });

  const [hoveredFloor, setHoveredFloor] = useState(null);
  const [hoveredRoom, setHoveredRoom] = useState(null);

  const hoveredOnFloor = (index, mouseInside) => {
    if (clickedFloor === null) {
      if (mouseInside) {
        setHoveredFloor(index);
      } else if (hoveredFloor === index) {
        setHoveredFloor(null);
      }
    } else {
      setHoveredFloor(null);
    }
  };

  const clickedOnFloor = (index) => {
    if (clickedFloor === null) {
      onClickedFloorChange(index);
    }
  };

  const clickedOnRoom = (floorIndex, roomIndex, event) => {
    if (clickedFloor !== null) {
      if (floorIndex === clickedFloor) {
        event.stopPropagation();
        onClickedRoomChange(roomIndex);
      }
    }
  };

  const hoveredOnRoom = (floorIndex, roomIndex, mouseInside, event) => {
    if (clickedFloor !== null && clickedFloor === floorIndex) {
      event.stopPropagation();
      if (mouseInside) {
        setHoveredRoom(roomIndex);
      } else if (hoveredRoom === roomIndex) {
        setHoveredRoom(null);
      }
    }
  };

  const convertDegreesToRadians = (x, y, z) => {
    let degrees = [x, y, z];
    return (degrees = degrees.map((degree) => degree * (Math.PI / 180)));
  };

  const floorObjects = Array(5).fill(0);
  return (
    <group ref={buildingRef} position={[0, -20, 0]}>
      {floorObjects.map((floorObject, floorIndex) => (
        <group key={floorIndex} ref={(e) => (floorRefs.current[floorIndex] = e)} rotation={convertDegreesToRadians(90, 180, 0)}>
          <mesh
            dispose={null}
            onPointerOver={(e) => {
              e.stopPropagation();
              hoveredOnFloor(floorIndex, true);
              if (windowWidth <= 1024) {
                clickedOnFloor(floorIndex);
              }
            }}
            onPointerOut={(e) => {
              e.intersections.length && hoveredOnFloor(floorIndex, false);
            }}
            onClick={(e) => {
              e.stopPropagation();
              clickedOnFloor(floorIndex);
            }}
            geometry={floorBaseMesh}
          >
            <meshStandardMaterial
              attach="material"
              ref={(e) => (materialRefs.current[floorIndex] = e)}
              transparent={true}
              color={"white"}
            />
          </mesh>
          <mesh geometry={floorSideMesh}>
            <meshStandardMaterial
              attach="material"
              ref={(e) => (sideRefs.current[floorIndex] = e)}
              transparent={true}
              color={hoveredFloor === floorIndex ? "#00FBFF" : "grey"}
            />
          </mesh>
          {floorsRoomsMeshes[floorIndex].map((floorRoom, roomIndex) => (
            <group key={roomIndex}>
              <mesh
                geometry={floorRoom}
                onPointerOver={(e) => {
                  hoveredOnRoom(floorIndex, roomIndex, true, e);
                  if (windowWidth <= 1024) {
                    clickedOnRoom(floorIndex, roomIndex, e);
                  }
                }}
                onPointerOut={(e) => {
                  hoveredOnRoom(floorIndex, roomIndex, false, e);
                }}
                onClick={(e) => {
                  clickedOnRoom(floorIndex, roomIndex, e);
                }}
              >
                <meshStandardMaterial
                  attach="material"
                  ref={(e) => (roomRefs.current[floorIndex][roomIndex] = e)}
                  transparent={true}
                  color={
                    (clickedFloor === floorIndex && hoveredRoom === roomIndex) || (clickedFloor === floorIndex && clickedRoom === roomIndex)
                      ? "yellow"
                      : "#E3E3E3"
                  }
                />
              </mesh>
            </group>
          ))}
        </group>
      ))}
    </group>
  );
};

export default FloorsModel;
