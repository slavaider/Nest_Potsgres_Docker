import { Router } from 'express';
import boardsService from './board.service';
import Board from './board.model';
import Column from '../column/column.model';

const router = Router();

// GET ALL
router.get('/', async (_req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});
// POST
router.post('/', async (req, res) => {
  const boardRaw = req.body;
  boardRaw.columns = boardRaw.columns.map((col) => new Column(col));
  const board = await boardsService.createBoard(new Board(boardRaw));
  res.status(201).json(board);
});
// GET ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    const board = await boardsService.getById(id);
    if (board === 404) {
      res.status(404).send();
    } else {
      res.json(board);
    }
  }
});
// PUT ID
router.put('/:id', async (req, res) => {
  const boardRaw = req.body;
  boardRaw.columns = boardRaw.columns.map((col: {
    id?: string | undefined;
    title?: string | undefined;
    order?: number | undefined;
  } | undefined) => new Column(col));
  const { id } = req.params;
  if (id) {
    const board = await boardsService.putById(boardRaw, id);
    res.json(board);
  }
});
// DELETE ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    const status = await boardsService.deleteById(id);
    res.status(status).send();
  }
});

export default router;
