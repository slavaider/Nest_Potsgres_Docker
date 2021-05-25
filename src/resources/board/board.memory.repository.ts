import taskService from '../task/task.service';
import Board from './board.model';

const boards: Board[] = [];

/**
 * Function to get all Boards
 * from im-memory boards list
 * @returns {Promise<Board[]>} [Boards list]
 */
const getAll = async (): Promise<Board[]> => boards;

/**
 * Function to create board
 * @param board [object of Board model]
 * @returns {Promise<Board>} [return board back]
 */
const createBoard = async (board: Board): Promise<Board> => {
  boards.push(board);
  return board;
};

/**
 * Function to get Board by ID from in-memory list
 * @param id [id of Board from boards list]
 * @returns {Promise<number|Board>} [return status code 404 if not found, and Board if found]
 */
const getById = async (id: string): Promise<number | Board | undefined> => {
  const idx = boards.findIndex((board) => board.id === id);
  if (idx === -1) {
    return 404;
  }
  return boards[idx];
};

/**
 * Function to put Board by ID to im-memory list
 * @param newBoard [new object to put in list]
 * @param id [id of needed object]
 * @returns {Promise<Board>} [new object of Board model]
 */
const putById = async (newBoard: {
    id?: string | undefined;
    title?: string | undefined;
    columns?: never[] | undefined;
  }
  | undefined, id: string): Promise<Board | undefined> => {
  const idx = boards.findIndex((board) => board.id === id);
  boards[idx] = new Board({ id, ...newBoard });
  return boards[idx];
};

/**
 * Function to delete object of Board model from in-memory list
 * @param id [id of needed object]
 * @returns {Promise<number>} [return 404 if object not found and 204 if successful deleted]
 */
const deleteById = async (id: string): Promise<number> => {
  const idx = boards.findIndex((task) => task.id === id);
  if (idx === -1) {
    return 404;
  }
  await taskService.deleteBoard(id);
  boards.splice(idx, 1);
  return 204;
};

export default { getAll, createBoard, getById, putById, deleteById };

