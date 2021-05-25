import boardsRepo from './board.memory.repository';
import Board from './board.model';

const getAll = ():Promise<Board[]> => boardsRepo.getAll();

const createBoard = (board: Board):Promise<Board> => boardsRepo.createBoard(board);

const getById = (id: string):Promise<number | Board | undefined> => boardsRepo.getById(id);

const putById = (newUser: {
  id?: string | undefined;
  title?: string | undefined;
  columns?: never[] | undefined;
} | undefined, id: string):Promise<Board | undefined> => boardsRepo.putById(newUser, id);


const deleteById = (id:string):Promise<number> => boardsRepo.deleteById(id);

export default { getAll, createBoard, getById, putById, deleteById };
