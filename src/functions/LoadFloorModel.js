import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function LoadFloorModel() {
  const { nodes } = useLoader(GLTFLoader, "./models/floor.glb");

  const floorBaseMesh = nodes.floor_base_1.geometry;
  const floorSideMesh = nodes.floor_base_side_1.geometry;

  const floorsNumbers = Array(5).fill(0);

  const floorsRoomsNumbers = [6, 4, 5, 4, 5];

  let floorsRoomsMeshes = [];

  floorsNumbers.forEach((floor, floorIndex) => {
    let roomsMeshes = Array(floorsRoomsNumbers[floorIndex]).fill(0);
    roomsMeshes.forEach((room, roomIndex) => {
      let roomMeshName = `floor${floorIndex + 1}_room_${roomIndex + 1}_1`;
      roomsMeshes[roomIndex] = nodes[roomMeshName].geometry;
    });
    floorsRoomsMeshes.push(roomsMeshes);
  });

  return [floorBaseMesh, floorSideMesh, floorsRoomsMeshes];
}

export default LoadFloorModel;
