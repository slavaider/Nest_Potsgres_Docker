import boardsRepo from './board.memory.repository';
import Board from '../../entity/board.model';
import User from '../../entity/user.model';

const getAll = ():Promise<Board[]> => boardsRepo.getAll();

const createBoard = (board: Board):Promise<Board> => boardsRepo.createBoard(board);

const getById = (id: number):Promise<number | Board | undefined> => boardsRepo.getById(id);

const putById = (newUser: User, id: number):Promise<Board | undefined> => boardsRepo.putById(newUser, id);


const deleteById = (id:number):Promise<number> => boardsRepo.deleteById(id);

export default { getAll, createBoard, getById, putById, deleteById };
