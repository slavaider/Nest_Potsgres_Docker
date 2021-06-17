import taskService from '../task/task.service';
import Board from '../../entity/board.model';
import { getRepository } from 'typeorm';

const getAll = async (): Promise<Board[]> => {
  const boardRepository = getRepository(Board);
  return boardRepository.find();
};


const createBoard = async (board: Board): Promise<Board> => {
  const boardRepository = getRepository(Board);
  const newBoard = boardRepository.create(board);
  return boardRepository.save(newBoard);
};


const getById = async (id: number): Promise<number | Board | undefined> => {
  const boardRepository = getRepository(Board);
  return boardRepository.findOne(id);
};


const putById = async (newBoard: Board, id: number): Promise<Board | undefined> => {
  const boardRepository = getRepository(Board);
  await boardRepository.update(id,newBoard);
  return newBoard;

};


const deleteById = async (id: number): Promise<number> => {
  const boardRepository = getRepository(Board);
  const board = await boardRepository.findOne(id);
  if (board) {
    await taskService.deleteBoard(id);
    await boardRepository.delete(id);
    return 204;
  }
  return 404;
};

export default { getAll, createBoard, getById, putById, deleteById };

