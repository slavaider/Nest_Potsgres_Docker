import boardsRepo from './board.memory.repository';
import Board from '../../entity/board.model';

const getAll = ():Promise<Board[]> => boardsRepo.getAll();

const createBoard = (board: Board):Promise<Board> => boardsRepo.createBoard(board);

const getById = (id: number):Promise<number | Board | undefined> => boardsRepo.getById(id);

const putById = (newBoard: Board, id: number):Promise<Board | undefined> => boardsRepo.putById(newBoard, id);

const deleteById = (id:number):Promise<number> => boardsRepo.deleteById(id);

export default { getAll, createBoard, getById, putById, deleteById };
