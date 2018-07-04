'use strict'
const Node = require('./node.js')

class Graph {
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
    if (prefs.up) {
      prefs.up.sides.down = chunk
    }
    if (prefs.down) {
      prefs.down.sides.up = chunk
    }
    if (prefs.left) {
      prefs.left.sides.right = chunk
    }
    if (prefs.right) {
      prefs.right.sides.left = chunk
    }
    this.chunks.push(chunk)
  }
  getChunk(x, y) {
    return this.chunks.find(c => {
      return c.x === x && c.y == y
    }) || null
  }
}

module.exports = Graph