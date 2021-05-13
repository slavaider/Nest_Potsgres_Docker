const { Router } = require('express');

const router = new Router();
const boardsService = require('./board.service');
const Board = require('./board.model');
const Column = require('../column/column.model');

// GET ALL
router.get('/', async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});
// POST
router.post('/', async (req, res) => {
  const boardRaw = req.body;
  boardRaw.columns = boardRaw.columns.map((col)=>new Column(col));
  const board = await boardsService.createBoard(new Board(boardRaw));
  res.status(201).json(board);
});
// GET ID
router.get('/:id', async (req, res) => {
  const board = await boardsService.getById(req.params.id);
  if(board===404){
    res.status(404).send();
  }else{
    res.json(board);
  }
});
// PUT ID
router.put('/:id', async (req, res) => {
  const boardRaw = req.body;
  boardRaw.columns = boardRaw.columns.map((col)=>new Column(col));
  const board = await boardsService.putById(boardRaw, req.params.id);
  res.json(board);
});
// DELETE ID
router.delete('/:id', async (req, res) => {
  const status = await boardsService.deleteById(req.params.id);
  res.status(status).send();
});

module.exports = router;
