'use strict'

class Graf {
  /**
   * Creates an empty graph
   * 
   * @param {*} [defaultValue = null] default value for every created chunk
   */
  constructor(defaultValue) {
    this.chunks = []
    this.defaultValue = defaultValue
  }
  /**
   * Adds a chunk in a given position
   * 
   * @param {Number} x chunks x coordinate
   * @param {Number} y chunks y coordinate
   * @param {*} [value = defaultValue] chunk value
   */
  addChunk(x, y, value) {
    if (this.getChunk(x, y)) {
      throw new Error('A chunk at this position already exists.')
    }
    const chunk = new Chunk(x, y, value || this.defaultValue)
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
  /**
   * Returns chunk at given position or null otherwise
   * 
   * @param {Number} x chunks x coordinate
   * @param {Number} y chunks y coordinate
   */
  getChunk(x, y) {
    return this.chunks.find(c => {
      return c.x === x && c.y == y
    }) || null
  }
  /**
   * Removes chunk at given position
   * 
   * @param {*} x chunks x coordinate
   * @param {*} y chunks y coordinate
   */
  removeChunk(x, y) {
    const chunk = this.getChunk(x, y)
    if (!chunk) {
      throw new Error('There isn\'t any chunk at this position.')
    }
    let prefs = chunk.sides
    if (prefs.up) {
      prefs.up.sides.down = null
    }
    if (prefs.down) {
      prefs.down.sides.up = null
    }
    if (prefs.left) {
      prefs.left.sides.right = null
    }
    if (prefs.right) {
      prefs.right.sides.left = null
    }
    this.chunks.splice(this.chunks.indexOf(chunk), 1)
  }
}

class Chunk {
  /**
   * Creates node for graph
   * 
   * @param {*} x node's x coordinate
   * @param {*} y node's y coordinate
   * @param {*} value node's value
   */
  constructor(x, y, value) {
    this.x = x
    this.y = y
    this.value = value
    this.sides = {
      up: null,
      right: null,
      down: null,
      left: null
    }
  }
  getLeft() {
    return this.sides.left
  }
  getRight() {
    return this.sides.right
  }
  getUp() {
    return this.sides.up
  }
  getDown() {
    return this.sides.down
  }
  getValue() {
    return this.value
  }
  setValue(value) {
    this.value = value
    return this
  }
}

module.exports = Graf