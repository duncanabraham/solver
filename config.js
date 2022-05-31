const data = [
  [0,0,0,0,0,1,1,0,0,0,0,0],
  [0,1,0,1,0,0,0,0,1,1,0,1],
  [0,1,0,1,1,1,1,0,1,0,0,0],
  [1,1,0,0,0,0,1,0,1,0,1,0],
  [0,1,0,1,1,0,1,0,1,0,1,0],
  [0,1,0,1,0,0,1,0,0,0,0,0],
  [0,1,0,1,1,0,1,1,1,0,1,0],
  [0,1,0,1,0,0,0,0,0,0,1,0],
  [0,0,0,1,1,1,1,1,1,0,1,0],
  [0,1,0,0,0,0,0,0,0,0,0,0],
]

const mazeSettings = {
  width: 12,
  height: 10,
  maze: data,
  currentPos: { x: 0, y: 2 },
  endPos: { x: 11, y: 9 }
}

module.exports = {
  mazeSettings
}