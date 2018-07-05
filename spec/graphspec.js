'use strict'
const Graph = require('../graph')

describe('Graph', () => {
  const graph = new Graph([[1], [2], [3]])
  it('properly adds first chunk', done => {
    graph.addChunk(0, 0)
    expect(graph.chunks.length).toEqual(1)
    expect(graph.chunks[0].sides).toBeDefined()
    expect(graph.chunks[0].value).toEqual(graph.defaultValue)
    done()
  })
  it('should return proper chunk', done => {
    let chunk = graph.getChunk(0, 0)
    expect(chunk).toBeDefined()
    expect(chunk.sides).toBeDefined()
    expect(chunk.value).toEqual(graph.defaultValue)
    done()
  })
  it('properly adds second chunk', done => {
    graph.addChunk(0, 1)
    expect(graph.chunks.length).toEqual(2)
    expect(graph.chunks[1].sides).toBeDefined()
    expect(graph.chunks[1].value).toEqual(graph.defaultValue)
    expect(graph.chunks[1].sides.up).toEqual(graph.chunks[0])
    expect(graph.chunks[0].sides.down).toEqual(graph.chunks[1])
    done()
  })
  it('should properly add unconnected chunk', done => {
    graph.addChunk(2, 0)
    expect(graph.chunks.length).toEqual(3)
    expect(graph.chunks[2].sides).toBeDefined()
    expect(graph.chunks[2].value).toEqual(graph.defaultValue)
    expect(graph.chunks[2].sides.up).toBeNull()
    expect(graph.chunks[2].sides.right).toBeNull()
    expect(graph.chunks[2].sides.down).toBeNull()
    expect(graph.chunks[2].sides.left).toBeNull()
    done()
  })
  it('should connect chunk between two other chunks', done => {
    graph.addChunk(1, 0)
    expect(graph.chunks.length).toEqual(4)
    expect(graph.chunks[3].sides).toBeDefined()
    expect(graph.chunks[3].value).toEqual(graph.defaultValue)
    expect(graph.chunks[3].sides.up).toBeNull()
    expect(graph.chunks[3].sides.right).toEqual(graph.chunks[2])
    expect(graph.chunks[3].sides.down).toBeNull()
    expect(graph.chunks[3].sides.left).toEqual(graph.chunks[0])
    done()
  })
  it('should create chunk with different value', done => {
    const value = 0.1 + 0.2
    graph.addChunk(5, 5, value)
    expect(graph.getChunk(5, 5).value).toBeDefined()
    expect(graph.getChunk(5, 5).value).toEqual(value)
    done()
  })
  it('should remove specified chunk', done => {
    const chunk = graph.getChunk(0, 0)
    const prefs = chunk.sides
    graph.removeChunk(chunk.x, chunk.y)
    if (prefs.up) {
      expect(prefs.up.sides.down).toBeNull()
    }
    if (prefs.down) {
      expect(prefs.down.sides.up).toBeNull()
    }
    if (prefs.left) {
      expect(prefs.left.sides.right).toBeNull()
    }
    if (prefs.right) {
      expect(prefs.right.sides.left).toBeNull()
    }
    done()
  })
  it('should throw an error when adding chunk in an occupied space', done => {
    let err = null
    try {
      graph.addChunk(graph.chunks[0].x, graph.chunks[0].y)
    } catch(e)  {
      err = e
    }
    expect(err).not.toBeNull()
    done()
  })
  it('should should not crash when adding chunks in spiral', done => {
    const g = new Graph()
    let jump = 1
    let jumpCounter = 0
    let jumpEven = false
    let index = 0
    let pos = {
      x: 0,
      y: 0
    }
    let directions = [{ x: 1, y: 0}, { x: 0, y: -1}, { x: -1, y: 0}, { x: 0, y: 1}]
    let err = null
    try {
      for (let i = 0; i < 100; i++) {
        g.addChunk(pos.x, pos.y, i)
        pos.x += directions[index].x
        pos.y += directions[index].y
        jumpCounter++
        if (jumpCounter >= jump) {
          index++
          if (index >= directions.length) {
            index = 0
          }
          jumpCounter = 0
          if (jumpEven) {
            jump++
            jumpEven = false
          }
          jumpEven = true
        }
      }
    } catch(e) {
      err = e
    }
    expect(err).toBeNull()
    done()
  })
})