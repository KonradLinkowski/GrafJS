'use strict'
class Node {
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
}

module.exports = Node