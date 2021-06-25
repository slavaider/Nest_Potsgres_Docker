import { Router } from 'express';
import boardsService from './board.service';
import Board from '../../entity/board.model';
import TaskColumn from '../../entity/column.model';
import guard from '../../middlewares/login.guard';
const router = Router();

function toResponse(board:Board){
  const copy = board.columns?.map(col=>{
   return {...col,id:col.id?.toString()} as TaskColumn
  })
  return {id:board.id?.toString(),columns:copy,title:board.title};
}
// GET ALL
router.get('/', guard,async (_req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards.map(toResponse));
});
// POST
router.post('/', guard,async (req, res) => {
  const board = await boardsService.createBoard(req.body);
  res.status(201).json(toResponse(board));
});
// GET ID
router.get('/:id', guard,async (req, res) => {
  const { id } = req.params;
  if (id) {
    const board = await boardsService.getById(Number(id)).catch(console.log.bind(console));
    if (!board) {
      res.status(404).send();
    } else {
      res.json(toResponse(board as Board));
    }
  }
});
// PUT ID
router.put('/:id', guard,async (req, res) => {
  const { id } = req.params;
  if (id) {
    const board = await boardsService.putById(req.body, Number(id));
    res.json(toResponse(board as Board));
  }
});
// DELETE ID
router.delete('/:id', guard,async (req, res) => {
  const { id } = req.params;
  if (id) {
    const status = await boardsService.deleteById(Number(id));
    res.status(status).send();
  }
});

export default router;
