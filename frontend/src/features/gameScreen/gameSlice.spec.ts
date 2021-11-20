import { IPlayerMove } from '../../models/IPlayerMove.interface';
import counterReducer, {
  GameState,
  makeMove
} from './gameSlice';

describe('counter reducer', () => {
  const initialState: GameState = {
    currentPlayer: 'X',
    gameTable: [['', '', ''], ['', '', ''], ['', '', '']],
    gameOver: false,
    winner: undefined,
    numberOfMoves: 0,
  };

  it('should put an x in the first square', () => {
    const playerMove: IPlayerMove = {
      moveCol: 0,
      moveRow: 0,
    }
    const actual = counterReducer(initialState, makeMove(playerMove));
    expect(actual.gameTable).toEqual(['X', '', '', '', '', '', '', '', '']);
  });
});
