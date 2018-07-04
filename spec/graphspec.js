'use strict'
const Graph = require('../graph')

describe('Graph', () => {
  it('Properly adds first chunk', done => {
    const graph = new Graph([])
    graph.addChunk(0, 0)
    expect(graph.chunks.length).toEqual(1)
    expect(graph.chunks[0].sides).toBeDefined()
    expect(graph.chunks[0].value).toEqual([])
    done()
  })
})