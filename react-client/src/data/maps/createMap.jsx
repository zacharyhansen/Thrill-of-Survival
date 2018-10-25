import { BOARD_HEIGHT_TILES, BOARD_WIDTH_TILES } from "../../config/constants";

const createMap = () => {
  const map = [];
  for (let i = 0; i < BOARD_HEIGHT_TILES; i++) {
    const row = [];
    for (let j = 0; j < BOARD_WIDTH_TILES; j++) {
      row.push(0);

    }
    map.push(row);
  }
  return map;
}

export default createMap;