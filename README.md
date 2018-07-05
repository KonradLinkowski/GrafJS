# GrafJS
[![Build Status](https://travis-ci.org/KonradLinkowski/GrafJS.svg?branch=dev)](https://travis-ci.org/KonradLinkowski/GrafJS)
[![Dependency Status](https://david-dm.org/KonradLinkowski/GrafJS.svg)](https://david-dm.org/KonradLinkowski/GrafJS)
## Features
2D graph for chunk-based games.
- No dependencies
- Easy to use
- Lightweight
## Installing
```bash
$ npm install grafjs
```
## Example
Import
```js
const Graf = require('grafjs')
```
Creating a board where each chunk is 20 x 20.
```js
// creates 20 x 20 grid filled with 0's
const grid = new Array(20).fill(null).map(a => new Array(20).fill(0))
// creates the board
const board = new Graf(grid)
// adds examplary chunk
board.addChunk(0, 0)
```
Getting specified chunk and adjacent chunks.
```js
// returns chunk at position (1, 3)
const chunk = board.getChunk(1, 3)
const left = chunk.sides.left
const right = chunk.sides.right
const up = chunk.sides.up
const down = chunk.sides.down
```
Removing a chunk
```js
// removes the chunk at (3, 4)
board.removeChunk(3, 4)
```