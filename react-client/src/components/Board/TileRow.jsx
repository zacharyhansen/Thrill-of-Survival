import React from 'react';
import Tile from './Tile.jsx';

const TileRow = (props) => {
  return (
    <div>
      {
        props.tileRow.map((tile) => <Tile tile={tile} />)
      }
    </div>
  )
}

export default TileRow;