export default class Node {
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