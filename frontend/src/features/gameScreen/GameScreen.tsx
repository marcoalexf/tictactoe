import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { makeMove, restartGame, selectCurrentGameBoard, selectNumberOfMoves } from './gameSlice';
import styles from './GameScreen.module.css';
import { GameBoard } from '../../components/GameBoard/GameBoard';
import { FC } from '../../types/FC';
import { Box } from '@mui/system';
import { IPlayerMove } from '../../models/IPlayerMove.interface';
import { Button } from '@mui/material';


interface GameScreenProps {

}

export const GameScreen: FC<GameScreenProps> = ({}) => {
  const dispatch = useAppDispatch();
  const gameBoard = useAppSelector(selectCurrentGameBoard);
  const numberOfMoves = useAppSelector(selectNumberOfMoves);

  useEffect(() => {
    console.log('checking if a tie exists..')
    if (numberOfMoves >= 9) {
      alert('A tie!');
    }
  }, [numberOfMoves]);

  const handleMove = (row: number, col: number) => {
    console.log(`clicked on row ${row} and col ${col}`);
    const playerMove: IPlayerMove = {
      moveCol: col,
      moveRow: row,
    }
    dispatch(makeMove(playerMove))
  }

  return (
    <Box height="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Box mb={1}>
        <GameBoard gameBoard={gameBoard} handleClick={handleMove} />
      </Box>
      
      {
        numberOfMoves === 9 && 
        <Box>
          <Button variant="outlined" onClick={() => dispatch(restartGame())}>New Game</Button>
        </Box>
      }
    </Box>
  );
}
