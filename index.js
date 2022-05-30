const { data, mazeSettings } = require('./config')
const Solver = require('./lib/solver')
const Maze = require('./lib/maze')

const thisSolver = new Solver()
const thisMaze = new Maze({
  width: 10,
  height: 10,
  maze: data
})

const startPos = [5, 3]
const endPos = [10,0]


const route = thisSolver.solve(thisMaze, startPos, endPos)

console.log(route)
