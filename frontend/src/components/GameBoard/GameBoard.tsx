import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { FC } from '../../types/FC';

export interface GameBoardProps {
    gameBoard: string[][],
    handleClick: (row: number, col: number) => void,
}

const useStyles = makeStyles({
    'hoverable': {
        '&:hover': {
            cursor: 'pointer',
            filter: 'grayscale(.3)',
        }
    }
})

export const GameBoard: FC<GameBoardProps> = ({
    gameBoard,
    handleClick,
}) => {
    const classes = useStyles();
    const renderGameBoardRow = (row: string[], rowIndex: number) => {
        return (
            <Box display="flex" alignItems="center" justifyContent="center">
                {
                    row.map((item, colIndex) => {
                        return (
                            <Box 
                            flex="0 1 auto" width="100px" height="100px" 
                            key={colIndex} bgcolor="green" mr={colIndex === row.length - 1 ? 0 : 1} 
                            className={classes.hoverable} 
                            display="flex" alignItems="center" justifyContent="center" 
                            onClick={() => handleClick(rowIndex, colIndex)}
                            >
                                <Typography variant="h1">{item}</Typography>
                            </Box>
                        )
                    })
                }
            </Box>
        )
    }
    return (
        <Box display="flex" flexDirection="column">
            {gameBoard.map((row, index) => {
                return (
                    <Box key={index} mb={index === gameBoard.length - 1 ? 0 : 1}>{renderGameBoardRow(row, index)}</Box>
                )
            })}
        </Box>
    )
}
