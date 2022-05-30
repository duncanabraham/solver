const { data: maze } = require('./config')
const Solver = require('./lib/solver')
const thisSolver = new Solver()

const startPos = [5, 3]
const endPos = [10,0]

const route = thisSolver.solve(maze, startPos, endPos)

console.log(route)
