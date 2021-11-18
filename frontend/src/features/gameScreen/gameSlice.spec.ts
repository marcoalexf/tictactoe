import { IPlayerMove } from '../../models/IPlayerMove.interface';
import counterReducer, {
  GameState,
  makeMove
} from './gameSlice';

describe('counter reducer', () => {
  const initialState: GameState = {
    currentPlayer: 'X',
    gameBoard: ['', '', '', '', '', '', '', '', ''],
    gameOver: false,
    winner: undefined,
  };

  it('should put an x in the first square', () => {
    const playerMove: IPlayerMove = {
      playerId: '1',
      playerNumber: 1,
      move: 0,
    }
    const actual = counterReducer(initialState, makeMove(playerMove));
    expect(actual.gameBoard).toEqual(['X', '', '', '', '', '', '', '', '']);
  });
});
