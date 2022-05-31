class Maze {
  constructor(options) {
    this.width = 10
    this.height = 10
    this.currentPos = { x: 0, y: 0 }
    this.endPos = { x: 9, y: 9 }
    this.maze = []
    Object.assign(this, options)
    this.location(this.currentPos)
    this.endPoint()
  }

  _zeroPaths() {
    this.maze.forEach(row => {
      row.forEach(i => {
        if (this.maze[i] === 2) {
          this.maze[i] = 0
        }
      })
    })
  }

  location(xy) {
    if (this.maze[xy.y][xy.x] === 0) {
      this._zeroPaths()
      this.currentPos = xy
      this.maze[xy.y][xy.x] = 2
    }
  }

  endPoint() {
    this.maze[this.endPos.y][this.endPos.x] = 3
  }

  _rowAsMap(r) {
    /**
     * 0 = corridor
     * 1 = wall
     * 2 = player
     * 3 = end point
     * 4 = blocked corridor
     */
    const cellTypes = [' ', '░', 'O', 'X', '.']
    let mapRow = cellTypes[1]
    r.forEach(i => {
      mapRow += cellTypes[i]
    })
    return mapRow + cellTypes[1]
  }

  _solidLine(w) {
    return new Array(w + 2).fill('░').join('')
  }

  _clearScreen() {
    process.stdout.write('\u001b[2J\u001b[0;0H')
  }

  show(clear) {
    if (clear) {
      this._clearScreen()
    }
    console.log(this._solidLine(this.width))
    this.maze.forEach(row => {
      console.log(this._rowAsMap(row))
    })
    console.log(this._solidLine(this.width))
  }
}

module.exports = Maze
