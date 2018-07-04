const Node = require('./node.js')

export default class Graph {
  constructor(defaultValue) {
    this.chunks = []
    this.defaultValue = defaultValue
  }
  addChunk(x, y, value) {
    const chunk = new Node(x, y, value || this.defaultValue)
    const prefs = {
      up: this.getChunk(x, y - 1),
      down: this.getChunk(x, y + 1),
      left: this.getChunk(x - 1, y),
      right: this.getChunk(x + 1, y)
    }
    chunk.sides = prefs
    prefs.up.sides.down = chunk
    prefs.down.sides.up = chunk
    prefs.left.sides.right = chunk
    prefs.right.sides.left = chunk
    this.chunks.push(chunk)
  }
  getChunk(x, y) {
    return this.chunks.find(c => {
      return c.x === x && c.y == y
    }) || null
  }
}