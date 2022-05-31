const { mazeSettings } = require('./config')
const Solver = require('./lib/solver')
const Maze = require('./lib/maze')

const thisMaze = new Maze(mazeSettings)
thisMaze.show()

const thisSolver = new Solver(thisMaze)
const route = thisSolver.solve()
console.log(route)

thisMaze.show(false)
