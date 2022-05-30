class Maze {
  constructor(options) {
    this.width = 10
    this.height = 10
    this.maze = []
    Object.assign(this, options)
  }

  _rowAsMap(r) {
    let mapRow = ''
    r.forEach(i => {
      mapRow += i === 0 ? ' ' 
    })
  }

  show() {
    const tmp = maze
    this.maze.forEach(row => {
      console.log(this._rowAsMap(row))
    })
  }
}

module.exports = Maze
