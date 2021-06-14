import { Router } from 'express';
import boardsService from './board.service';

const router = Router();

// GET ALL
router.get('/', async (_req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});
// POST
router.post('/', async (req, res) => {
  const boardRaw = req.body;
  boardRaw.columns = boardRaw.columns.map((col) => col);
  const board = await boardsService.createBoard(boardRaw);
  res.status(201).json(board);
});
// GET ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    const board = await boardsService.getById(Number(id));
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
  boardRaw.columns = boardRaw.columns.map(col=>col);
  const { id } = req.params;
  if (id) {
    const board = await boardsService.putById(boardRaw, Number(id));
    res.json(board);
  }
});
// DELETE ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    const status = await boardsService.deleteById(Number(id));
    res.status(status).send();
  }
});

export default router;
