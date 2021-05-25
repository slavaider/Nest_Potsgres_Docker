import boardsRepo from './board.memory.repository';
import Board from './board.model';

const getAll = () => boardsRepo.getAll();

const createBoard = (board: Board) => boardsRepo.createBoard(board);

const getById = (id: string) => boardsRepo.getById(id);

const putById = (newUser: {
  id?: string | undefined;
  title?: string | undefined;
  columns?: never[] | undefined;
} | undefined, id: string) => boardsRepo.putById(newUser, id);


const deleteById = (id:string) => boardsRepo.deleteById(id);

export default { getAll, createBoard, getById, putById, deleteById };
