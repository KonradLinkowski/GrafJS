# GrafJS
[![NPM Downloads](https://img.shields.io/npm/dw/grafjs.svg)](https://npmjs.org/package/grafjs)
[![Build Status](https://travis-ci.org/KonradLinkowski/GrafJS.svg?branch=dev)](https://travis-ci.org/KonradLinkowski/GrafJS)
[![Dependency Status](https://david-dm.org/KonradLinkowski/GrafJS.svg)](https://david-dm.org/KonradLinkowski/GrafJS)
[![devDependency Status](https://david-dm.org/KonradLinkowski/GrafJS/dev-status.svg)](https://david-dm.org/KonradLinkowski/GrafJS#info=devDependencies)
[![Known Vulnerabilities](https://snyk.io/test/github/KonradLinkowski/GrafJS/badge.svg?targetFile=package.json)](https://snyk.io/test/github/KonradLinkowski/GrafJS?targetFile=package.json)
[![Maintainability](https://api.codeclimate.com/v1/badges/f2916fbf643afc357ef7/maintainability)](https://codeclimate.com/github/KonradLinkowski/GrafJS/maintainability)
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
// creates the board with a default value for each chunk
const board = new Graf(grid)
// adds examplary chunk
board.addChunk(0, 0)
```
Getting specified chunk and adjacent chunks.
```js
// returns chunk at position (1, 3)
const chunk = board.getChunk(1, 3)
const left = chunk.getLeft()
const right = chunk.getRight()
const up = chunk.getUp()
const down = chunk.getDown()
```
Getting and setting chunk's content.
```js
// gets value
const content = chunk.getValue()
// sets value
chunk.setValue([1])
```
Removing a chunk
```js
// removes the chunk at (3, 4)
board.removeChunk(3, 4)
```